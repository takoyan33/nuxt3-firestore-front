<script setup>
import { ref, computed } from 'vue'

const { data } = useFetch('/api/todos')

const searchQuery = ref('')

const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, '0')
const day = String(now.getDate()).padStart(2, '0')
const formattedDate = `${year}-${month}-${day}`

const sortOrder = ref('新しい順')
const sortDone = ref('全て表示')

const filteredTodos = computed(() => {
  if (!data.value) {
    return []
  }
  const query = searchQuery.value.trim().toLowerCase()
  let filtered = data.value.filter((todo) => {
    return todo.name.toLowerCase().includes(query)
  })

  if (sortDone.value === '完了') {
    filtered = filtered.filter((todo) => {
      return todo.done === true
    })
  } else if (sortDone.value === '未完了') {
    filtered = filtered.filter((todo) => {
      return todo.done === false
    })
  } else if (sortDone.value === '全て表示') {
    filtered = filtered.filter((todo) => {
      return todo.done === true || todo.done === false
    })
  }
  if (sortOrder.value === '古い順') {
    filtered = filtered.sort((a, b) => a.period.localeCompare(b.period))
  } else if (sortOrder.value === '新しい順') {
    filtered = filtered.sort((a, b) => b.period.localeCompare(a.period))
  }
  return filtered
})

function formatDate (dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', options)
}
</script>

<template>
  <div>
    <v-btn variant="outlined" class="my-2">
      <nuxt-link :to="'/todos/new'" class="text-decoration-none text-black">
        タスクを新規登録する
      </nuxt-link>
    </v-btn>

    <div class="d-flex justify-center align-center m-auto">
      <div class="w-25 mx-2 text-center my-4">
        <v-text-field v-model="searchQuery" label="タスクを検索する" />
      </div>
      <div class="w-25 mx-2">
        <v-select
          v-model="sortDone"
          :items="['完了', '未完了', '全て表示']"
          label="全て表示"
          outlined
        />
      </div>
      <div class="w-25 mx-2">
        <v-select
          v-model="sortOrder"
          :items="['古い順', '新しい順']"
          label="並び替え"
          outlined
        />
      </div>
    </div>
    <p class="text-center">全{{ filteredTodos.length }}件</p>
    <div class="d-flex align-center flex-column">
      <div
        v-for="(todo, index) in filteredTodos"
        :key="'todo-' + index"
        class="my-4"
      >
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card
              width="400"
              raised
              link
              v-bind="props"
              elevation="4"
              :class="{ 'bg-grey-lighten-1': todo.done === true }"
              :color="isHovering ? 'purple lighten-7' : 'white'"
            >
              <nuxt-link
                :to="'/todos/' + todo.uuid"
                class="text-decoration-none text-black"
              >
                <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
                  <p class="text-h6 my-4 p-2">
                    {{ todo.name }}
                  </p>
                  <p class="my-2">
                    {{ todo.content }}
                  </p>
                  <p
                    class="my-2"
                    :class="{
                      'text-decoration-line-through':
                        formattedDate > todo.period,
                    }"
                  >
                    期限：{{ formatDate(todo.period) }}
                  </p>

                  <p
                    :class="{
                      'text-red-lighten-1': todo.done === true,
                      'text-blue-lighten-1': todo.done === false,
                    }"
                  >
                    {{ todo.done ? "完了" : "未完了" }}
                  </p>

                  <span
                    width="200"
                    v-bind="props"
                    :class="{
                      'bg-deep-orange-darken-3': todo.category === '家事',
                      'bg-deep-purple-darken-3': todo.category === '趣味',
                      'bg-deep-blue-darken-3': todo.category === '勉強',
                      'bg-green-darken-3': todo.category === '仕事',
                      'bg-deep-red-darken-3': todo.category === 'その他',
                    }"
                  >
                    <span
                      class="text-white font-weight-bold px-4 py-4 rounded-lg"
                      >#{{ todo.category }}</span
                    >
                  </span>
                  <p
                    width="200"
                    v-bind="props"
                    :class="{
                      'text-blue-lighten-1': todo.priority === '高',
                      'text-blue-lighten-1': todo.priority === '低',
                    }"
                  >
                    優先度<span class="text-lime-darken-1 font-weight-bold">{{
                      todo.priority
                    }}</span>
                  </p>
                </div>
              </nuxt-link>
            </v-card>
          </template>
        </v-hover>
      </div>
    </div>
    <Calendar :todo="data" :date="formattedDate" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { data } = useFetch('/api/todos')
console.log(data)

const searchQuery = ref('')

const filteredTodos = computed(() => {
  if (!data.value) {
    return []
  }
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return data.value
  }
  return data.value.filter((todo) => {
    return todo.name.toLowerCase().includes(query)
  })
})
</script>

<template>
  <div>
    <h2 class="text-h4 text-center">
      Todoの一覧
    </h2>
    <v-btn variant="outlined" class="my-2">
      <nuxt-link
        :to="'/todos/new'"
        class="text-decoration-none text-black"
      >
        タスクを新規登録する
      </nuxt-link>
    </v-btn>
    <p class="text-center">
      全{{ filteredTodos.length }}件
    </p>
    <div class="text-center my-4">
      <v-text-field
        v-model="searchQuery"
        label="タスクを検索する"
      />
    </div>

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
              :color="isHovering ? 'primary' : undefined"
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
                  <p class="my-2">
                    期限：　　{{ todo.period }}
                  </p>
                  <!-- <p class="my-2">作成日：　{{ todo.date }}</p> -->

                  <p
                    :class="{
                      'text-blue-lighten-1': todo.done === true,
                      'text-red-lighten-1': todo.done === false,
                    }"
                  >
                    {{ todo.done ? "未完了" : "完了" }}
                  </p>

                  <p
                    width="400"
                    v-bind="props"
                    :class="{
                      'text-blue-lighten-1': todo.priority === '高',
                      'text-blue-lighten-1': todo.priority === '低',
                    }"
                  >
                    優先度：<span class="text-lime-darken-1 font-weight-bold">{{
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { collection, getDocs, where, query } from "firebase/firestore"
import db from "../firebase.js"

// const { data } = useFetch("/api/todos");
  const q = query(collection(db, "todos"), where("done", "==", false));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data())

const searchQuery = ref("");


const sortOrder = ref("asc")

const filteredTodos = computed(() => {
  if (!data.value) {
    return [];
  }
  const query = searchQuery.value.trim().toLowerCase();
  let filtered = data.value.filter((todo) => {
    return todo.name.toLowerCase().includes(query);
  });
  if (sortOrder.value === "asc") {
    filtered = filtered.sort((a, b) => a.period.localeCompare(b.period));
  } else if (sortOrder.value === "desc") {
    filtered = filtered.sort((a, b) => b.period.localeCompare(a.period));
  }
  return filtered
});
</script>

<template>
  <div>
    <h2 class="text-h4 text-center">未完了のTodoの一覧</h2>
    <v-btn variant="outlined" class="my-2">
      <nuxt-link :to="'/todos/new'" class="text-decoration-none text-black">
        タスクを新規登録する
      </nuxt-link>
    </v-btn>
    <v-btn variant="outlined" class="my-2 mx-2">
      <nuxt-link :to="'/completetodo'" class="text-decoration-none text-black">
        完了したタスクを確認する
      </nuxt-link>
    </v-btn>
    <v-btn variant="outlined" class="my-2 mx-2">
      <nuxt-link :to="'signin'" class="text-decoration-none text-black">
        ログイン
      </nuxt-link>
    </v-btn>
    <v-btn variant="outlined" class="my-2 mx-2">
      <nuxt-link :to="'signup'" class="text-decoration-none text-black">
        新規登録
      </nuxt-link>
    </v-btn>
    <p class="text-center">全{{ filteredTodos.length }}件</p>
    <div class="text-center my-4">
      <v-text-field v-model="searchQuery" label="タスクを検索する" />
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
                  <p class="my-2">期限：　　{{ todo.period }}</p>
                  <!-- <p class="my-2">作成日：{{ todo.date }}</p> -->

                  <p
                    :class="{
                      'text-red-lighten-1': todo.done === true,
                      'text-blue-lighten-1': todo.done === false,
                    }"
                  >
                    {{ todo.done ? "完了" : "未完了" }}
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
    <Calendar :todo="data" />
  </div>
</template>

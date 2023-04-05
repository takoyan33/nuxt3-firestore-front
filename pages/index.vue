<script setup>
import { ref, computed } from "vue";

// const { data } = useFetch("/api/todos");
const { data } = useFetch("/api/todos", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Sort-Order": "desc",
  },
});
const searchQuery = ref("");

const filteredTodos = computed(() => {
  if (!data.value) {
    return [];
  }
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return data.value;
  }
  return data.value.filter((todo) => {
    return todo.name.toLowerCase().includes(query);
  });
});

function completeTask(todo) {
  todo.done = !todo.done;
}
</script>

<template>
  <div>
    <h2 class="text-h4 text-center">Todoの一覧</h2>
    <p class="text-center">全{{ data.length }}件</p>
    <div class="text-center my-4">
      <v-text-field
        v-model="searchQuery"
        label="タスクを検索する"
      ></v-text-field>
    </div>

    <div class="d-flex align-center flex-column">
      <div
        v-for="(todo, index) in filteredTodos"
        :key="'todo-' + index"
        class="my-4"
      >
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
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
                  <p class="my-2">期限：　　{{ todo.period }}</p>
                  <p class="my-2">作成日：　{{ todo.date }}</p>
                  <!-- <v-btn
                    variant="outlined"
                    @click="completeTask(todo)"
                    class="my-2"
                  >
                    {{ todo.done ? "未完了に戻す" : "完了する" }}
                  </v-btn> -->
                  <p
                    width="400"
                    v-bind="props"
                    :class="{
                      'text-blue-lighten-1': todo.priority === '高',
                      'text-blue-lighten-1': todo.priority === '低',
                    }"
                  >
                    優先度：{{ todo.priority }}
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

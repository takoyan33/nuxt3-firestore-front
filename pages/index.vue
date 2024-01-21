<script setup lang="ts">
import { ref, computed } from "vue";
import { getDocs, collection } from "firebase/firestore";
import { completeOptions, orderOptions } from "../components/options";
import db from "../firebase.js";
// import { q } from '@fullcalendar/core/internal-common'

interface Todo {
  id: string;
  uuid: string;
  name: string;
  done: boolean;
  period: string;
}

const todos = ref<Todo[]>([]);

// Firestoreからデータを取得する関数
async function fetchTodos() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const fetchedTodos: { id: string; uuid: string }[] = [];
  querySnapshot.forEach((doc) => {
    fetchedTodos.push({ id: doc.id, uuid: doc.id, ...doc.data() });
  });

  todos.value = fetchedTodos;
}

onMounted(() => {
  fetchTodos();
});

const searchQuery = ref("");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

const sortOrder = ref("新しい順");
const sortDone = ref("全て表示");

const filteredTodos = computed(() => {
  if (!todos.value) {
    return [];
  }
  const query = searchQuery.value.trim().toLowerCase();
  let filtered = todos.value.filter((todo) => {
    return todo.name.toLowerCase().includes(query);
  });

  if (sortDone.value === "完了") {
    filtered = filtered.filter((todo) => {
      return todo.done === true;
    });
  } else if (sortDone.value === "未完了") {
    filtered = filtered.filter((todo) => {
      return todo.done === false;
    });
  } else if (sortDone.value === "全て表示") {
    filtered = filtered.filter((todo) => {
      return todo.done === true || todo.done === false;
    });
  }
  if (sortOrder.value === "古い順") {
    filtered = filtered.sort((a, b) => a.period.localeCompare(b.period));
  } else if (sortOrder.value === "新しい順") {
    filtered = filtered.sort((a, b) => b.period.localeCompare(a.period));
  }
  return filtered;
});

function formatDate(dateString: string) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", options);
}
</script>

<template>
  <div>
    <CommonButton
      :btnText="encodeURIComponent('タスクを新規登録')"
      :toLink="'/todos/new'"
    />
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-text-field v-model="searchQuery" label="タスクを検索する" />
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-select
              v-model="sortDone"
              :items="completeOptions"
              label="全て表示"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-select
              v-model="sortOrder"
              :items="orderOptions"
              label="並び替え"
              outlined
            />
          </v-col>
        </v-row>
      </v-container>
      <p class="text-center">全{{ filteredTodos.length }}件</p>
      <div class="d-block d-md-flex justify-space-between align-center">
        <div
          v-for="(todo, index) in filteredTodos"
          :key="'todo-' + index"
          class="my-4"
        >
          <CommonCard
            :done="todo.done"
            :uuid="todo.uuid"
            :name="todo.name"
            :content="todo.content"
            :period="formatDate(todo.period)"
            :category="todo.category"
            :priority="todo.priority"
          />
        </div>
      </div>
      <CommonCalendar
        :period="data"
        :todo="data"
        :date="formattedDate"
        name="indexのカレンダー"
      />
    </div>
  </div>
</template>

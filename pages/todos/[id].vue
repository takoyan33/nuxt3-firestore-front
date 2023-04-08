<script setup>
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import db from "../../firebase.js";

const route = useRoute();
const { data } = useFetch(`/api/todos`);

async function completeTask(todo) {
  const done = !todo.done;
  console.log(done)
  const docRef = doc(db, `todos`, todo.uuid);
  await updateDoc(docRef, {
    done: done,
  });
  if (done === true) {
    alert("タスクが完了しました");
  } else {
    alert("タスクを未完了にしました");
  }
    location.reload();
}
</script>

<template>
  <v-breadcrumbs class="my-4">
    <v-breadcrumbs-item :to="{ path: '/' }">Home</v-breadcrumbs-item>
    <v-breadcrumbs-item>＞</v-breadcrumbs-item>
    <v-breadcrumbs-item>Todoの詳細</v-breadcrumbs-item>
  </v-breadcrumbs>

  <div v-for="(todo, index) in data" :key="'todo-' + index" class="my-4">
    <div v-if="todo.uuid === route.params.id">
      <v-hover>
        <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
          <p class="text-h6 my-4 p-2">
            {{ todo.name }}
          </p>
          <p class="my-2">仕事内容</p>
          <p class="my-2">
            {{ todo.content }}
          </p>
          <v-btn variant="outlined" @click="completeTask(todo)" class="my-2">
            {{ todo.done ? "未完了に戻す" : "完了する" }}
          </v-btn>
        </div>
      </v-hover>
    </div>
  </div>
</template>

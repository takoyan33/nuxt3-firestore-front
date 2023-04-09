<script setup>
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../firebase.js";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { data } = useFetch(`/api/todos`);
const content = ref("");
const name = ref("");
const period = ref("");
const priority = ref("");

const editTodo = async () => {
  console.log(content.value);
  try {
    const docRef = doc(db, `todos`, route.params.id);
    await updateDoc(docRef, {
      name: name.value,
      content: content.value,
      period: period.value,
      priority: priority.value,
    });
    alert("Todoを編集しました");
    router.push('/todos/' + route.params.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <v-breadcrumbs class="my-4">
    <v-breadcrumbs-item :to="{ path: '/' }">Home</v-breadcrumbs-item>
    <v-breadcrumbs-item>＞</v-breadcrumbs-item>
    <v-breadcrumbs-item :to="{ path: '/todos/' + route.params.id }">Todoの詳細</v-breadcrumbs-item>
    <v-breadcrumbs-item>＞</v-breadcrumbs-item>
    <v-breadcrumbs-item>Todoの編集</v-breadcrumbs-item>
  </v-breadcrumbs>

  <div v-for="(todo, index) in data" :key="'todo-' + index" class="my-4">
    <div v-if="todo.uuid === route.params.id">
      <div class="w-50 mx-auto">
        <form @submit.prevent="editTodo">
          <div class="form-group">
            <label for="todoname">タスクの名前</label>
            <p>現在：{{ todo.name }}</p>
            <v-text-field
              v-model="name"
              id="todoname"
              class="form-control ml-4 mb-4"
              required
            />
          </div>
          <div class="form-group">
            <label for="todocontent">内容　　　　</label>
            <p>現在：{{ todo.content }}</p>
            <v-textarea
              v-model="content"
              id="todocontent"
              class="form-controll ml-4 mb-4"
              rows="3"
              required
            ></v-textarea>
          </div>
          <div class="form-group">
            <label for="todoperiod">期限　　　　</label>
            <p>現在：{{ todo.period }}</p>
            <v-text-field
              v-model="period"
              id="todoperiod"
              type="date"
              class="form-controll ml-4 mb-4"
              required
            />
          </div>
          <div class="form-group">
            <label for="todopriority">優先度</label>
            <p>現在：{{ todo.priority }}</p>
            <v-select
              v-model="priority"
              id="todopriority"
              class="form-control ml-4 mb-4"
              :items="['☆☆☆☆☆', '☆☆☆', '☆']"
              required
            >
            </v-select>
          </div>
          <div class="btn btn-primary text-center m-auto">
            <v-btn type="submit" class="text-center m-auto" variant="outlined">
              編集する
            </v-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

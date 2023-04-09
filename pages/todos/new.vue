<script setup>
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.js";

const content = ref("");
const name = ref("");
const period = ref("");
const priority = ref("");
const router = useRouter();

const addTodo = async () => {
  console.log(content.value);
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      name: name.value,
      content: content.value,
      done: false,
      period: period.value,
      priority: priority.value,
      date: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    alert("投稿しました");
    router.push("/");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>

<template>
  <div>
    <h2 class="text-h4 text-center">Todoの投稿</h2>
    <v-breadcrumbs class="my-4">
      <v-breadcrumbs-item :to="{ path: '/' }">Home</v-breadcrumbs-item>
      <v-breadcrumbs-item>＞</v-breadcrumbs-item>
      <v-breadcrumbs-item>Todoの投稿</v-breadcrumbs-item>
    </v-breadcrumbs>
    <div class="w-50 mx-auto">
      <form @submit.prevent="addTodo">
        <div class="form-group">
          <label for="todoname">タスクの名前</label>
          <v-text-field
            v-model="name"
            id="todoname"
            class="form-control ml-4 mb-4"
            required
          />
        </div>
        <div class="form-group">
          <label for="todocontent">内容　　　　</label>
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
            投稿する
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

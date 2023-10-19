<script setup>
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.js";
import { categoryOptions, priorityOptions } from "../../components/options";
const content = ref("");
const name = ref("");
const period = ref("");
const category = ref("");
const router = useRouter();
const priority = ref(null);

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

const addTodo = async () => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      name: name.value,
      content: content.value,
      done: false,
      period: period.value,
      category: category.value,
      priority: priority.value,
      date: formattedDate,
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
      <v-breadcrumbs-item :to="{ path: '/' }"> Home </v-breadcrumbs-item>
      <v-breadcrumbs-item>＞</v-breadcrumbs-item>
      <v-breadcrumbs-item>Todoの投稿</v-breadcrumbs-item>
    </v-breadcrumbs>
    <div class="w-50 mx-auto">
      <form @submit.prevent="addTodo">
        <div class="form-group">
          <label for="todoname">タスクの名前</label>
          <v-text-field
            id="todoname"
            v-model="name"
            class="form-control ml-4 mb-4"
            required
          />
        </div>
        <div class="form-group">
          <label for="todocontent">内容 </label>
          <v-textarea
            id="todocontent"
            v-model="content"
            class="form-controll ml-4 mb-4"
            rows="3"
            required
          />
        </div>
        <div class="form-group">
          <label for="todoperiod">期限 </label>
          <v-text-field
            id="todoperiod"
            v-model="period"
            type="date"
            class="form-controll ml-4 mb-4"
            required
          />
        </div>
        <div class="form-group">
          <label for="todocategory">カテゴリ</label>
          <v-select
            id="todocategory"
            v-model="category"
            class="form-control ml-4 mb-4"
            :items="categoryOptions"
            required
          />
        </div>
        <div class="form-group">
          <label for="todopriority">優先度</label>
          <v-select
            id="todopriority"
            v-model="priority"
            class="form-control ml-4 mb-4"
            :items="priorityOptions"
            required
          />
        </div>
        <CommonButton
          :btnText="encodeURIComponent('投稿する')"
          classNames="text-center"
        />
      </form>
    </div>
  </div>
</template>

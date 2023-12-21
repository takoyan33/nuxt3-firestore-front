<script setup  lang="ts">
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { useRoute, useRouter } from 'vue-router'
import db from '../../../firebase.js'
import { priorityOptions } from '../../../components/options'

const route = useRoute()
const router = useRouter()
const content = ref('')
const name = ref('')
const period = ref('')
const priority = ref('')
const todoRef = doc(db, 'todos', route.params.id)
const todoSnap = await getDoc(todoRef)
const todo = todoSnap.data()

const editTodo = async () => {
  try {
    const docRef = doc(db, 'todos', route.params.id)
    await updateDoc(docRef, {
      name: name.value,
      content: content.value,
      period: period.value,
      priority: priority.value
    })
    alert('Todoを編集しました')
    router.push('/todos/' + route.params.id)
  } catch (e) {
    console.e('Error adding document: ', e)
  }
}
</script>

<template>
  <div class="w-50 mx-auto">
    <v-breadcrumbs class="my-4">
      <v-breadcrumbs-item :to="{ path: '/' }"> Home </v-breadcrumbs-item>
      <v-breadcrumbs-item>＞</v-breadcrumbs-item>
      <v-breadcrumbs-item :to="{ path: '/todos/' + route.params.id }">
        Todoの詳細
      </v-breadcrumbs-item>
      <v-breadcrumbs-item>＞</v-breadcrumbs-item>
      <v-breadcrumbs-item>Todoの編集</v-breadcrumbs-item>
    </v-breadcrumbs>

    <form @submit.prevent="editTodo">
      <div class="form-group">
        <label for="todoname">タスクの名前</label>
        <p>現在：{{ todo.name }}</p>
        <v-text-field
          id="todoname"
          v-model="name"
          class="form-control ml-4 mb-4"
          required
        />
      </div>
      <div class="form-group">
        <label for="todocontent">内容   </label>
        <p>現在：{{ todo.content }}</p>
        <v-textarea
          id="todocontent"
          v-model="content"
          class="form-controll ml-4 mb-4"
          rows="3"
          required
        />
      </div>
      <div class="form-group">
        <label for="todoperiod">期限   </label>
        <p>現在：{{ todo.period }}</p>
        <v-text-field
          id="todoperiod"
          v-model="period"
          type="date"
          class="form-controll ml-4 mb-4"
          required
        />
      </div>
      <div class="form-group">
        <label for="todopriority">優先度</label>
        <p>現在：{{ todo.priority }}</p>
        <v-select
          id="todopriority"
          v-model="priority"
          class="form-control ml-4 mb-4"
          :items="priorityOptions"
          required
        />
      </div>
      <div class="btn btn-primary text-center m-auto">
        <v-btn type="submit" class="text-center m-auto" variant="outlined">
          編集する
        </v-btn>
      </div>
    </form>
  </div>
</template>

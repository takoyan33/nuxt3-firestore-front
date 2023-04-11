<script setup>
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import db from '../../firebase.js'

const route = useRoute()
const router = useRouter()
const todoRef = doc(db, 'todos', route.params.id)
const todoSnap = await getDoc(todoRef)
const todo = todoSnap.data()

async function completeTask (todo) {
  const done = !todo.done
  const docRef = doc(db, 'todos', todo.uuid)
  await updateDoc(docRef, {
    done
  })
  if (done === true) {
    alert('タスクが完了しました')
  } else {
    alert('タスクを未完了にしました')
  }
  location.reload()
}

async function deleteTask (todo) {
  try {
    const docRef = doc(db, 'todos', todo.uuid)
    await deleteDoc(docRef)
    alert('Todoを削除しました')
    router.push('/')
  } catch (e) {
    alert('エラーが起きました')
    console.log(e)
  }
}
</script>

<template>
  <v-breadcrumbs class="my-4">
    <v-breadcrumbs-item :to="{ path: '/' }">
      Home
    </v-breadcrumbs-item>
    <v-breadcrumbs-item>＞</v-breadcrumbs-item>
    <v-breadcrumbs-item>Todoの詳細</v-breadcrumbs-item>
  </v-breadcrumbs>
  <v-hover>
    <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
      <p class="text-h6 my-4 p-2">
        {{ todo.name }}
      </p>
      <p class="my-2">
        仕事内容
      </p>
      <p class="my-2">
        {{ todo.content }}
      </p>

      <p class="my-2">
        期限：{{ todo.period }}
      </p>
      <!-- <p class="my-2">作成日：{{ todo.date }}</p> -->

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
      <v-btn variant="outlined" class="my-2" @click="completeTask(todo)">
        {{ todo.done ? "完了する" : "未完了に戻す" }}
      </v-btn>

      <div class="m-2">
        <nuxt-link
          :to="'/todos/edit/' + route.params.id"
          class="text-decoration-none text-black"
        >
          <v-btn variant="outlined" class="my-2">
            編集する
          </v-btn>
        </nuxt-link>
        <nuxt-link class="text-decoration-none text-black">
          <v-btn variant="outlined" class="mx-2" @click="deleteTask(todo)">
            削除する
          </v-btn>
        </nuxt-link>
      </div>
    </div>
  </v-hover>

  <Calendar :period="todo.period" :name="todo.name" />
</template>

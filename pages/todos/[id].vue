<script setup>
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import db from '../../firebase.js'

const route = useRoute()
const router = useRouter()
const todoRef = doc(db, 'todos', route.params.id)
const todoSnap = await getDoc(todoRef)
const todo = todoSnap.data()

const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, '0')
const day = String(now.getDate()).padStart(2, '0')
const formattedDate = `${year}-${month}-${day}`

async function completeTask (todo) {
  const done = !todo.done
  const docRef = doc(db, 'todos', route.params.id)
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

async function deleteTask () {
  try {
    const docRef = doc(db, 'todos', route.params.id)
    await deleteDoc(docRef)
    alert('Todoを削除しました')
    router.push('/')
  } catch (e) {
    alert('エラーが起きました')
    console.log(e)
  }
}

const createdDate = new Date(todo.date)
const currentDate = new Date()
const timeDifference = currentDate.getTime() - createdDate.getTime()
const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24))

function formatDate (dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', options)
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
      <p class="text-h4 my-4 p-2">
        {{ todo.name }}
      </p>
      <p class="my-2 text-h6">
        カテゴリ
      </p>
      <span
        width="200"
        v-bind="props"
        :class="{
          'bg-deep-orange-darken-3': todo.category === '家事',
          'bg-deep-purple-darken-3': todo.category === '趣味',
          'bg-deep-blue-darken-3': todo.category === '勉強',
          'bg-green-darken-3': todo.category === '仕事',
          'bg-deep-red-darken-3': todo.category === 'その他',
        }"
      >
        <span class="text-white font-weight-bold px-4 py-4 rounded-lg">#{{ todo.category }}</span>
      </span>

      <p class="my-2 text-h6">
        内容
      </p>
      <p class="my-2">
        {{ todo.content }}
      </p>

      <p
        class="my-2"
        :class="{ 'text-decoration-line-through': formattedDate > todo.period }"
      >
        期限：{{ formatDate(todo.period) }}
      </p>
      <p class="my-2">
        作成日：{{ formatDate(todo.date) }}
      </p>
      <p class="my-2">
        作成から {{ daysAgo }} 日
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
      <p
        :class="{
          'text-red-lighten-1': todo.done === true,
          'text-blue-lighten-1': todo.done === false,
        }"
      >
        {{ todo.done ? "完了" : "未完了" }}
      </p>
      <v-btn variant="outlined" class="my-2" @click="completeTask(todo)">
        {{ todo.done ? "未完了に戻す" : "完了する" }}
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
  <CommonCalendar :period="todo.period" :name="todo.name" />
</template>

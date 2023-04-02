<template>
  <div>
    <h2 class="text-h4 text-center">{{ todo.name }}</h2>
    <p class="my-2">{{ todo.content }}</p>
    <v-btn
      variant="outlined"
      @click="completeTask(todo)"
      class="my-2"
    >
      {{ todo.done ? "未完了に戻す" : "完了する" }}
    </v-btn>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const { id } = params
    // Fetch todo item from API or database
    const todo = await useFetch(`/api/todos/${id}`).then(res => res.json())
    return { todo }
  },
  data() {
    return {
      // Add any additional data properties here if needed
    }
  },
  methods: {
    completeTask(todo) {
      // Add logic to mark todo as complete or incomplete
    }
  }
}
</script>

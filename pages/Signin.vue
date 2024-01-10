<template>
  <v-container>
    <h2 class="text-h4 my-4 text-center">ログイン</h2>
    <v-card class="my-5 p-4">
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <v-btn @click="login" color="primary">ログイン</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { auth } from '@/firebase.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)
        // On successful login, you might want to redirect the user to another page
        // this.$router.push('/dashboard') // Example redirection
      } catch (error) {
        console.error('Login error:', error)
        // Handle login error (show a message to the user, etc.)
      }
    }
  }
}
</script>

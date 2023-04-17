<template>
    <h2 class="text-h4 my-4 text-center">Signup</h2>
    <p>準備中です。</p>
    <v-btn @click="signInWithGoogle">Googleで登録する</v-btn>
</template>

<script>
import db from '../firebase.js'

export default {
  methods: {
    async signInWithGoogle() {
      await this.$fireAuth.signInWithPopup(
        new this.$fireAuth.OAuthProvider('google')
      )
    }
  },
  async created() {
    const user = await this.$fireAuth.currentUser
    if (user) {
      const db = this.$fireStore.firestore
      await db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email
      })
    }
  }
}
</script>

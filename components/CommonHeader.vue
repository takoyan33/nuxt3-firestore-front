<template>
  <div
    :class="{
      'bg-grey-darken-4': isDarkMode,
      'bg-blue-grey-lighten-3': !isDarkMode,
    }"
  >
    <v-container class="d-flex justify-space-between">
      <h4 class="text-h5 pt-2 pb-2 ml-16">
        <NuxtLink :to="`/`" class="text-decoration-none">
          <h4
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
          >
            <strong> Easy To Do </strong>
          </h4>
        </NuxtLink>
      </h4>
      <div class="d-flex justify-space-between">
        <p class="mt-3">
          <NuxtLink
            :to="`/about`"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
            >About</NuxtLink
          >
        </p>
        <p class="mt-3">
          <NuxtLink
            :to="`/api`"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
            >API</NuxtLink
          >
        </p>
        <p class="mt-3">
          <slot />
          <button
            @click="toggleDarkMode"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
          >
            ダークモード切替
          </button>
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    // クッキーから isDarkMode の値を取得
    const isDarkModeCookie = this.getCookie("isDarkMode")
    if (isDarkModeCookie && isDarkModeCookie === "true") {
      this.isDarkMode = true
    }
  },
  methods: {
    toggleDarkMode () {
      this.isDarkMode = !this.isDarkMode // 現在のモードをトグル

      // クッキーに isDarkMode の値を保存
      document.cookie = `isDarkMode=${
        this.isDarkMode
      }; expires=${this.getCookieExpiration()}; path=/`
      // ボタンを押した後にページをリロード
      location.reload()
    },
    getCookie (name) {
      if (process.client) {
        // クライアントサイドでのみ document を使う
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop().split(";").shift()
      }
      return null
    },

    getCookieExpiration () {
      const date = new Date()
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000)// 30日間有効
      return date.toUTCString()
    }
  }
}
</script>

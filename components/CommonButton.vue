<template>
  <div :class="'my-2 mx-auto text-decoration-none text-center' + classNames">
    <button
      :class="{
        'bg-white pa-2 rounded-lg text-decoration-none': isDarkMode,
        'bg-blue-grey-lighten-3 pa-2 rounded-lg text-center': !isDarkMode,
      }"
      type="submit"
      @click="handleButtonClick"
    >
      <div
        :class="{
          'text-grey-darken-4 text-decoration-none': isDarkMode,
          'text-grey-darken-4 text-decoration-none ': !isDarkMode,
        }"
        v-if="toLink"
        @click="redirectToLink"
      >
        {{ decodeURIComponent(btnText) }}
      </div>
      <div v-else>
        {{ decodeURIComponent(btnText) }}
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    btnText: {
      type: String,
      required: true,
    },
    toLink: {
      type: String,
      required: false,
    },
    classNames: {
      type: String,
      required: false,
    },
    handleButtonClick: {
      type: Function,
      required: false,
    },
  },
  setup() {
    return {};
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // クッキーから isDarkMode の値を取得
    const isDarkModeCookie = this.getCookie("isDarkMode");
    if (isDarkModeCookie && isDarkModeCookie === "true") {
      this.isDarkMode = true;
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 現在のモードをトグル

      // クッキーに isDarkMode の値を保存
      document.cookie = `isDarkMode=${
        this.isDarkMode
      }; expires=${this.getCookieExpiration()}; path=/`;
      // ボタンを押した後にページをリロード
      location.reload();
    },
    redirectToLink() {
      // ページをリダイレクト
      this.$router.push(this.toLink);
    },
    getCookie(name) {
      if (process.client) {
        // クライアントサイドでのみ document を使う
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
      }
      return null;
    },
    getCookieExpiration() {
      const date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); // 30日間有効
      return date.toUTCString();
    },
  },
});
</script>

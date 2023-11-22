<template>
  <div>
    <v-app
      :class="{
        'bg-grey-darken-4': isDarkMode,
        '': !isDarkMode,
      }"
    >
      <CommonHeader :isDarkMode="isDarkMode" />
      <v-content>
        <v-main>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-content>
      <CommonFooter :isDarkMode="isDarkMode" />
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false, // 初期値を設定
    };
  },
  created() {
    // クッキーから isDarkMode の値を取得
    const isDarkModeCookie = this.getCookie("isDarkMode");

    // クッキーが存在し、値が "true" の場合、isDarkMode を true に設定
    if (isDarkModeCookie && isDarkModeCookie === "true") {
      this.isDarkMode = true;
    }
  },
  methods: {
    // クッキーから値を取得するメソッド
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },
};
</script>

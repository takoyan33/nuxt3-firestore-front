<template>
  <v-app>
    <v-content>
      <v-main>
        <v-container>
          <div>
            <h2 class="text-center">404</h2>
            <p class="text-center">ページが見つかりません。</p>
          </div>
        </v-container>
      </v-main>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
export default {
  async asyncData({ error }) {
    error({ statusCode: 404 });
  },
};
</script>

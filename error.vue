<template>
  <div>
    <h2 class="text-center">404</h2>
    <p class="text-center">ページが見つかりません。</p>
  </div>
</template>

<script>
export default {
  async asyncData({ error }) {
    error({ statusCode: 404 });
  },

};
</script>
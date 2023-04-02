<script setup>
const route = useRoute();
</script>

<template>
  <div style="margin: 50px">ID： {{ route.params.id }}</div>
</template>

<script setup>
const route = useRoute();
const { data } = useFetch(`/api/todos`);
console.log(data);
</script>

<template>
  <!-- <div style="margin: 50px">ID： {{ route.params.id }}</div> -->

  <v-breadcrumbs class="my-4">
    <v-breadcrumbs-item :to="{ path: '/' }">Home</v-breadcrumbs-item>
    <v-breadcrumbs-item>＞</v-breadcrumbs-item>
    <v-breadcrumbs-item>記事詳細</v-breadcrumbs-item>
  </v-breadcrumbs>

  <div v-for="(product, index) in data" :key="'product-' + index" class="my-4">
    <div v-if="product.uuid === route.params.id">
      <v-hover>
        <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
          <p class="text-h6 my-4 p-2">
            {{ product.name }}
          </p>
          <p class="my-2">仕事内容</p>
          <p class="my-2">
            {{ product.content }}
          </p>
          <v-btn variant="outlined" @click="completeTask(product)" class="my-2">
            {{ product.done ? "未完了に戻す" : "完了する" }}
          </v-btn>
        </div>
      </v-hover>
    </div>
  </div>
</template>

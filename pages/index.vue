<script setup>
import { ref, computed } from "vue";

const { data } = useFetch("/api/products");
const searchQuery = ref("");

const filteredProducts = computed(() => {
  if (!data.value) {
    return [];
  }
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return data.value;
  }
  return data.value.filter((product) => {
    return product.name.toLowerCase().includes(query);
  });
});

function completeTask(product) {
  // your completeTask function logic here
  alert("現在実装途中です")
}
</script>

<template>
  <div>
    <h2 class="text-h4 text-center">Todoの一覧</h2>
    <p class="text-center">全{{ data.length }}件</p>
    <div class="text-center my-4">
      <v-text-field
        v-model="searchQuery"
        label="タスクを検索する"
      ></v-text-field>
    </div>

    <div class="d-flex align-center flex-column">
      <div
        v-for="(product, index) in filteredProducts"
        :key="'product-' + index"
        class="my-4"
      >
        <v-card width="400">
          <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
            <h2 class="text-h6 my-4 p-2">
              {{ product.name }}
            </h2>
            <p class="my-2">
              {{ product.content }}
            </p>
            <v-btn
              variant="outlined"
              @click="completeTask(product)"
              class="my-2"
            >
              完了する
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

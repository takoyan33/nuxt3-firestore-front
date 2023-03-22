<script setup>
const { data } = await useFetch("/api/products");

// const products = ref(data);

// const todo = ref({
//   name: "",
//   content: "",
// });

// const completeTask = (product) => {
//   // カートに商品を追加する処理
// };

// const addTodo = async () => {
//   const response = await fetch("/api/products", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo.value),
//   });

//   if (response.ok) {
//     todo.value.name = "";
//     todo.value.content = "";
//     products.value = [...products.value, todo.value];
//   }
// };
</script>

<template>
  <div>
    <div class="d-flex align-center flex-column">
      <div v-for="(product, index) in data" :key="'product-' + index" class="my-4">
        <v-card width="400">
          <div variant="outlined" class="col-md-4 my-4 mb-8">
            <h2 class="text-h6 my-4 p-2">
              {{ product.name }}
            </h2>
            <p class="my-2">
              {{ product.content }}
            </p>
            <NuxtLink :to="`/todos/${product.uuid}`">詳しくはこちら</NuxtLink>
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

    <!-- <form @submit.prevent="addTodo">
      <div class="form-group">
        <h2 class="my-2">TODOの追加</h2>
        <label for="name">名前:</label>
        <v-text-field v-model="todo.name" type="text" id="name"></v-text-field>
      </div>
      <div class="form-group">
        <label for="content">内容:</label>
        <v-text-field
          v-model="todo.content"
          type="text"
          id="content"
        ></v-text-field>
      </div>
      <v-btn variant="outlined" type="submit">追加</v-btn>
    </form> -->
  </div>
</template>

<template>
  <div class="bg-blue-grey-darken-3">
    <v-container class="d-flex justify-space-between">
      <h4 class="text-h5 pt-2 pb-2 ml-16">
        <NuxtLink :to="`/`" class="text-purple-lighten-5 text-decoration-none"
          >Easy To Do
        </NuxtLink>
      </h4>
      <div class="d-flex justify-space-between">
        <p class="mt-3">
          <NuxtLink
            :to="`/about`"
            class="text-purple-lighten-5 text-decoration-none mr-16"
            >About</NuxtLink
          >
        </p>
        <p class="mt-3">
          <NuxtLink
            :to="`/api`"
            class="text-purple-lighten-5 text-decoration-none mr-16"
            >API</NuxtLink
          >
        </p>
      </div>
    </v-container>
  </div>
</template>

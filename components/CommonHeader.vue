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
          <span
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
          >
            <strong> Easy To Do </strong>
          </span>
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
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

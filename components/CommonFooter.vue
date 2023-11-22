<template>
  <div
    :class="{
      'bg-grey-darken-4 text-center mx-auto w-100 py-2': isDarkMode,
      'bg-blue-grey-lighten-3 text-center mx-auto w-100 py-2': !isDarkMode,
    }"
  >
    <p
      :class="{
        'text-center text-blue-grey-lighten-4': isDarkMode,
        'text-center text-grey-darken-4': !isDarkMode,
      }"
    >
      &copy; {{ new Date().getFullYear() }} Easy To Do
    </p>
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

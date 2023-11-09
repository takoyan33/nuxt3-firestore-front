<template>
  <div>
    <textarea
      :class="classNames"
      :required="required"
      :aria-label="labelText"
      :placeholder="labelText"
      class="block w-100 px-3 py-2 text-base placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    labelText: {
      type: String,
      required: true
    },
    classNames: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup () {
    return {}
  }
})
</script>

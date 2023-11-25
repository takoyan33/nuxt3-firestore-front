<template>
  <label :class="'my-2 mx-auto ' + classNames">
    {{ decodeURIComponent(labelText) }}
    <span v-if="required" class="text-red-darken-1">*</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue"

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

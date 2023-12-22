<template>
  <select
    :id="selectId"
    v-model="vModel"
    :class="
      'block w-100 py-2 mb-4  text-base placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' +
      classNames
    "
    :required="required"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    vModel: {
      required: true
    },
    selectId: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    classNames: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  }
})
</script>

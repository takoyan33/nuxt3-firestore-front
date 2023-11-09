<template>
  <input />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    btnText: {
      type: String,
      required: true,
    },
    toLink: {
      type: String,
      required: true,
    },
    classNames: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

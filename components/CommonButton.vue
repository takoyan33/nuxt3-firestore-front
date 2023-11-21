<template>
  <div :class="'my-2 mx-auto' + classNames">
    <button
      class=""
      type="submit"
      @click="handleButtonClick"
    >
      <nuxt-link :to="toLink" :class="'text-decoration-none text-black '">
        {{ decodeURIComponent(btnText) }}
      </nuxt-link>
    </button>
  </div>
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
      required: false,
    },
    classNames: {
      type: String,
      required: false,
    },
    handleButtonClick: {
      type: Function,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

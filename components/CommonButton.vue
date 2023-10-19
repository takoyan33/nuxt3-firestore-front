<template>
  <div :class="'my-2 mx-auto ' + classNames">
    <v-btn variant="outlined" class="" type="submit">
      <nuxt-link :to="toLink" :class="'text-decoration-none text-black '">
        {{ decodeURIComponent(btnText) }}
      </nuxt-link>
    </v-btn>
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

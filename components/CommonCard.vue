<template>
  <div>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-card
          width="400"
          raised
          link
          v-bind="props"
          elevation="4"
          :class="{ 'bg-grey-lighten-1': done === true }"
          :color="isHovering ? 'purple lighten-7' : 'white'"
        >
          <nuxt-link
            :to="'/todos/' + uuid"
            class="text-decoration-none text-black"
          >
            <div variant="outlined" class="col-md-4 my-4 mb-8 px-4">
              <p class="text-h6 my-4 p-2">
                {{ name }}
              </p>
              <p class="my-2">
                {{ content }}
              </p>
              <p
                class="my-2"
                :class="{
                  'text-decoration-line-through': formattedDate > period,
                }"
              >
                期限：{{ period }}
              </p>

              <span
                width="200"
                v-bind="props"
                :class="{
                  'bg-deep-orange-darken-3 mx-3': done === true,
                  'bg-deep-purple-darken-3 mx-3': done === false,
                }"
              >
                <span
                  class="text-white font-weight-bold px-4 py-4 rounded-lg cursor-pointer mx-3"
                  >{{ done ? "完了" : "未完了" }}</span
                >
              </span>

              <span
                width="200"
                v-bind="props"
                :class="{
                  'bg-deep-orange-darken-3': category === '家事',
                  'bg-deep-purple-darken-3': category === '趣味',
                  'bg-deep-blue-darken-3': category === '勉強',
                  'bg-green-darken-3': category === '仕事',
                  'bg-deep-red-darken-3': category === 'その他',
                }"
              >
                <span class="text-white font-weight-bold px-4 py-4 rounded-lg"
                  >#{{ category }}</span
                >
              </span>
              <p
                width="200"
                v-bind="props"
                :class="{
                  'text-blue-lighten-1': priority === '高',
                  'text-blue-lighten-1': priority === '低',
                }"
              >
                優先度<span class="text-lime-darken-1 font-weight-bold">{{
                  priority
                }}</span>
              </p>
            </div>
          </nuxt-link>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script lang="ts">
import '@fullcalendar/core/locales/ja'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    done: {
      type: Boolean,
      required: true
    },
    uuid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    todo: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

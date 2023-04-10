<template>
  <v-container>
    <h2 class="text-h5 my-4 text-center">カレンダーでTodoを確認する</h2>
    <div class="calendar" ref="calendarRef" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/locales/ja'

export default defineComponent({
  props: {
    period: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const calendarRef = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      if (!calendarRef.value) { return}
      const calendar = new Calendar(calendarRef.value, {
        dateClick: (e) => {
          alert(`クリックされた日は、${e.dateStr}です。`)
        },
        plugins: [dayGridPlugin, interactionPlugin],
        locale: 'ja', // 日本語に設定
        events: [
          {
            title: props.name,
            start:props.period,
            end: props.period
          }
        ]
      })

      calendar.render()
    })

    return {
      calendarRef
    }
  }
})
</script>

<template>
  <v-container>
    <h2 class="text-h4 my-4 text-center">
      カレンダーでTodoを確認する
    </h2>
    <div ref="calendarRef" class="calendar" />
  </v-container>
</template>

<script lang="ts">
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/locales/ja'

export default defineComponent({
  props: {
    period: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    todo: {
      type: Object,
      required: true
    }
  },
  setup (props: { todo: any[]; name: any; period: any }) {
    const events = props.todo
      ? props.todo.map((todo: { name: any; period: any }) => ({
        title: todo.name,
        start: todo.period,
        end: todo.period
      }))
      : [{
          title: props.name,
          start: props.period,
          end: props.period
        }]
    const calendarRef = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      const calendar = new Calendar(calendarRef.value, {
        dateClick: (e) => {
          alert(`クリックされた日は、${e.dateStr}です。`)
        },
        plugins: [dayGridPlugin, interactionPlugin],
        locale: 'ja',
        events
      })

      calendar.render()
    })

    return {
      calendarRef
    }
  }
})
</script>

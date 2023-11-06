import { Story } from '@storybook/vue3'
import CommonCalendar from '../CommonCalendar.vue'

export default {
  title: 'CommonCalendar',
  component: CommonCalendar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'カレンダーは、サイト内で使われるボタンです'
  }
}

const Template: Story<typeof CommonCalendar> = () => ({
  components: { CommonCalendar },
  template: '<CommonCalendar />'
})

/* aaaaa */
export const Default = Template.bind({})

import { Story } from '@storybook/vue3'
import CommonCalendar from '../CommonCalendar.vue'

export default {
  title: 'components/CommonCalendar',
  component: CommonCalendar
}

const Template: Story<typeof CommonCalendar> = () => ({
  components: { CommonCalendar },
  template: '<CommonCalendar />'
})

export const Default = Template.bind({})

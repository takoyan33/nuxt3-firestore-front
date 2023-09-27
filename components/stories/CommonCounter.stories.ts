import { Story } from '@storybook/vue3'
import CommonCounter from '../CommonCounter.vue'

export default {
  title: 'components/Counter',
  component: CommonCounter
}

const Template: Story<typeof CommonCounter> = () => ({
  components: { CommonCounter },
  template: '<CommonCounter />'
})

export const Default = Template.bind({})
Default.storyName = 'Increment Counter Button'

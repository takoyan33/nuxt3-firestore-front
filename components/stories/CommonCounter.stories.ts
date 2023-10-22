import { Story } from '@storybook/vue3'
import CommonCounter from '../CommonCounter.vue'

export default {
  title: 'Counter',
  component: CommonCounter,
  parameters: {
    componentSubtitle: '共通ボタンは、サイト内で使われるボタンです',
  }
}

const Template: Story<typeof CommonCounter> = () => ({
  components: { CommonCounter },
  template: '<CommonCounter />'
})

export const Default = Template.bind({})
Default.storyName = 'Increment Counter Button'

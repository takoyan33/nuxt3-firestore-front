import { Story } from '@storybook/vue3'
import CommonFooter from '../CommonFooter.vue'

export default {
  title: 'CommonFooter',
  component: CommonFooter,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '共通ボタンは、サイト内で使われるボタンです',
  }
}

const Template: Story<typeof CommonFooter> = () => ({
  components: { CommonFooter },
  template: '<CommonFooter />'
})

export const Default = Template.bind({})

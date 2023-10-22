import { Story } from '@storybook/vue3'
import CommonHeader from '../CommonHeader.vue'

export default {
  title: 'CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '共通ボタンは、サイト内で使われるボタンです'
  }
}

const Template: Story<typeof CommonHeader> = () => ({
  components: { CommonHeader },
  template: '<CommonHeader />'
})

export const Default = Template.bind({})

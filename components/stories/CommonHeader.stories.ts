import { Story } from '@storybook/vue3'
import CommonHeader from '../CommonHeader.vue'

export default {
  title: 'components/CommonHeader',
  component: CommonHeader
}

const Template: Story<typeof CommonHeader> = () => ({
  components: { CommonHeader },
  template: '<CommonHeader />'
})

export const Default = Template.bind({})

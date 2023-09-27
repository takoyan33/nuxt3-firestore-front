import { Story } from '@storybook/vue3'
import CommonFooter from '../CommonFooter.vue'

export default {
  title: 'components/CommonFooter',
  component: CommonFooter
}

const Template: Story<typeof CommonFooter> = () => ({
  components: { CommonFooter },
  template: '<CommonFooter />'
})

export const Default = Template.bind({})

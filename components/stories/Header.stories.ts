import { Story } from '@storybook/vue3'
import Header from '../Header.vue'

export default {
  title: 'components/Header',
  component: Header
}

const Template: Story<typeof Header> = () => ({
  components: { Header },
  template: '<Header />'
})

export const Default = Template.bind({})

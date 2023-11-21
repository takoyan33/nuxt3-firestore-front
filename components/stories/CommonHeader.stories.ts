import { Story } from '@storybook/vue3'
import CommonHeader from '../CommonHeader.vue'

export default {
  title: 'CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'ヘッダーは、メニューを表示します'
  }
}

const Template: Story<typeof CommonHeader> = (args, { argTypes }) => ({
  components: { CommonHeader },
  props: Object.keys(argTypes),
  template: "<CommonHeader :isDarkMode=isDarkMode />",
  setup() {
    return { ...args };
  },
})

/** 通常のヘッダー */
export const Default = Template.bind({})
Default.args = {
  isDarkMode: false
}

/** ダークモードのヘッダー */
export const DarkDefault = Template.bind({})
DarkDefault.args = {
  isDarkMode: true
}

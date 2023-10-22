import { Story } from '@storybook/vue3'
import CommonButton from './CommonButton.vue'

export default {
  title: "CommonButton",
  component: CommonButton,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "CommonButtonは、サイト内で使われるボタンです",
  },
  argTypes: {
    btnText: {
      description: "ボタンのテキスト",
    },
    toLink: {
      description: "ボタンのURL",
    },
    classNames: {
      description: "ボタンのCSS",
    },
  },
};

const Template: Story<typeof CommonButton> = () => ({
  components: { CommonButton },
  template: '<CommonButton />'
})

export const Default = Template.bind({})
Default.args = {
  btnText: 'タスクを新規登録する',
  toLink: '/todos/new',
  classNames: 'custom-class'
}
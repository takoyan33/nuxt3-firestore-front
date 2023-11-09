import { Story } from "@storybook/vue3";
import CommonTextarea from "../CommonTextarea.vue";

export default {
  title: "CommonTextarea",
  component: CommonTextarea,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "CategoriLabelは、サイト内で使われるボタンです",
  },
};

const Template: Story<typeof CommonTextarea> = (args, { argTypes }) => ({
  components: { CommonTextarea },
  props: Object.keys(argTypes),
  template:
    '<CommonTextarea :labelText="labelText" :classNames="classNames" :required=false />',
  setup() {
    return { ...args };
  },
});

/** 通常のtextarea */
export const textarea = Template.bind({});
textarea.args = {
  labelText: "タイトル",
  classNames: "YourClassNames",
  required: false
};

/** 必須のラベル */
// export const requiredLabel = Template.bind({});
// requiredLabel.args = {
//   labelText: "パスワード",
//   classNames: "YourClassNames",
//   required: true
// }

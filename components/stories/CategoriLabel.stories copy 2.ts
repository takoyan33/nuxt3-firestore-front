import { Story } from "@storybook/vue3";
import CategoriLabel from "../CategoriLabel.vue";

export default {
  title: "CategoriLabel",
  component: CategoriLabel,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "CategoriLabelは、サイト内で使われるボタンです",
  },
};

const Template: Story<typeof CategoriLabel> = (args, { argTypes }) => ({
  components: { CategoriLabel },
  props: Object.keys(argTypes),
  template:
    '<CategoriLabel :labelText="labelText" :classNames="classNames" :required=false />',
  setup() {
    return { ...args };
  },
});

/** 通常のラベル */
export const label = Template.bind({});
label.args = {
  labelText: "メールアドレス",
  classNames: "YourClassNames",
  required: false
}

/** 必須のラベル */
export const requiredLabel = Template.bind({});
requiredLabel.args = {
  labelText: "パスワード",
  classNames: "YourClassNames",
  required: true
}

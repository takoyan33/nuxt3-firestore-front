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
    '<CategoriLabel :btnText="btnText" :toLink="toLink" :classNames="classNames" />',
  setup() {
    return { ...args };
  },
});

export const Default = Template.bind({});
Default.args = {
  btnText: "ラベル",
  toLink: "YourToLink",
  classNames: "YourClassNames",
};

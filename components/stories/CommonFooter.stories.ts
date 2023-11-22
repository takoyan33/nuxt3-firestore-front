import { Story } from "@storybook/vue3";
import CommonFooter from "../CommonFooter.vue";

export default {
  title: "CommonFooter",
  component: CommonFooter,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "フッターです",
  },
};

const Template: Story<typeof CommonFooter> = (args, { argTypes }) => ({
  components: { CommonFooter },
  props: Object.keys(argTypes),
  template: "<CommonFooter :isDarkMode=isDarkMode />",
  setup() {
    return { ...args };
  },
});

/** 通常のフッター */
export const Default = Template.bind({});
Default.args = {
  isDarkMode: false,
};

/** ダークモードのフッター */
export const DarkDefault = Template.bind({});
DarkDefault.args = {
  isDarkMode: true,
};

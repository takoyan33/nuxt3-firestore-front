import { Story } from "@storybook/vue3";
import CommonCard from "../CommonCard.vue";

export default {
  title: "CommonCard",
  component: CommonCard,
  parameters: {
    componentSubtitle: "共通ボタンは、サイト内で使われるボタンです",
  },
};

const Template: Story<typeof CommonCard> = (args, { argTypes }) => ({
  components: { CommonCard },
  props: Object.keys(argTypes),
  template: `
    <CommonCard 
      :done="done"
      :uuid="uuid"
      :name="name"
      :content="content"
      :period="period"
      :category="category"
      :priority="priority"
    />`,
  setup() {
    return { ...args };
  },
});

export const Defaultsss = Template.bind({});
Default.args = {
  done: true,
  uuid: "1",
  name: "Sample Task",
  content: "This is a sample task",
  period: "2023-12-31",
  category: "Work",
  priority: "High",
};

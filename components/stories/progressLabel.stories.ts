import progressLabel from "../progressLabel.vue"; // Import your Vue component
import { defineComponent } from "vue";

export default {
  title: "progressLabel",
  component: progressLabel,
  argTypes: {
    btnText: { control: "text" },
    toLink: { control: "text" },
    classNames: { control: "text" },
  },
};

const Template = (args) =>
  defineComponent({
    components: { progressLabel },
    setup() {
      return { args };
    },
    template: '<progressLabel v-bind="args" />',
  });

export const Default = Template.bind({});
Default.args = {
  btnText: "進行中",
  toLink: "/your-link",
};

import { Story } from "@storybook/vue3";
import Footer from "../Footer.vue";

export default {
  title: "components/Footer",
  component: Footer,
};

const Template: Story<typeof Footer> = () => ({
  components: { Footer },
  template: "<Footer />",
});

export const Default = Template.bind({});
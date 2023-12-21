// progressLabel.spec.js (or progressLabel.spec.ts)
import { mount } from "@vue/test-utils";
import progressLabel from "../../components/progressLabel.vue";

describe("progressLabel", () => {
  it("renders with default props", () => {
    const wrapper = mount(progressLabel, {
      props: {
        btnText: "Default Text",
        toLink: "/default-link",
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

});

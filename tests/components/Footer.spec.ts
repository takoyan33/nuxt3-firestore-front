import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "../../components/Footer.vue";


describe("Footer", () => {
  test("Footerコンポーネントが表示される", () => {
    const wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  test("タイトルが表示される", () => {
    const wrapper = mount(Footer);
    expect(wrapper.find("h4").text()).toContain("Nuxt Todo App");
  });
});

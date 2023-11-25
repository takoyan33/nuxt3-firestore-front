import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "../../components/CommonFooter.vue";

describe("Footer", () => {
  test("Footerコンポーネントが表示される", () => {
    const wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  test("タイトルが表示される", () => {
    const wrapper = mount(Footer);
    expect(wrapper.find("h4").text()).toContain("Easy To Do");
  });

  test("ダークモードの場合、適切なクラスが適用される", async () => {
    const wrapper = mount(Footer, {
      props: {
        isDarkMode: true,
      },
    });
    const divElement = wrapper.find("div");
    expect(divElement.classes()).toContain("bg-grey-darken-4");;
    const h4Element = wrapper.find("h4");
    expect(h4Element.classes()).toContain("text-blue-grey-lighten-4");
  });
});

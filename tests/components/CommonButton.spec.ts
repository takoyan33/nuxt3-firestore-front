import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CommonButton from "../../components/CommonButton.vue";

describe("CommonButton", () => {
  test("CommonButtonコンポーネントが表示される", () => {
    const wrapper = mount(CommonButton);
    expect(wrapper.exists()).toBe(true);
  });

  test("リンクのテキストがデコードされている", async () => {
    const btnText = "Test Button Text %20 Encoded";
    const wrapper = mount(CommonButton, {
      props: {
        btnText,
      },
    });
    const linkElement = wrapper.find("nuxt-link");
    expect(linkElement.text()).toContain(decodeURIComponent(btnText));
  });

  // test("ダークモードの場合、適切なクラスが適用される", async () => {
  //   const wrapper = mount(CommonButton, {
  //     props: {
  //       isDarkMode: true,
  //     },
  //   });
  //   const buttonElement = wrapper.find("button");
  //   expect(buttonElement.classes()).toContain("bg-white", "pa-2", "rounded-lg");
  // });

  // test("toLink プロパティが与えられない場合、リンクが表示されない", async () => {
  //   const toLink = "";
  //   const wrapper = mount(CommonButton, {
  //     props: {
  //       toLink,
  //     },
  //   });
  //   const linkElement = wrapper.find("nuxt-link");
  //   expect(linkElement.exists()).toBe(false);
  // });
});

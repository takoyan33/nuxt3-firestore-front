import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CommonButton from "../../components/CommonButton.vue";

describe("CommonButton", () => {
  test("CommonButtonコンポーネントが表示される", () => {
    const wrapper = mount(CommonButton);
    expect(wrapper.exists()).toBe(true);
  });

  // test("ダークモードの場合、適切なクラスが適用される", async () => {
  //   const wrapper = mount(CommonButton, {
  //     props: {
  //       isDarkMode: true,
  //     },
  //   });
  //   const buttonElement = wrapper.find("button");
  //   expect(buttonElement.classes()).toContain("bg-white pa-2 rounded-lg");
  // });
});

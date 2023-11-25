import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CategoriLabel from "../../components/CategoriLabel.vue";

describe("CategoriLabel", () => {
  test("CategoriLabelコンポーネントが表示される", () => {
    const wrapper = mount(CategoriLabel);
    expect(wrapper.exists()).toBe(true);
  });

  test("propsを渡せているかどうか", async () => {
    const wrapper = mount(CategoriLabel, {
      props: {
        labelText: "test",
        classNames: "bg-grey-darken-4", 
      },
    });
    const labelElement = wrapper.find("label");
    expect(labelElement.classes()).toContain("bg-grey-darken-4");
  });
});

import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";//mount関数ではテストを実施したいコンポーネントHelloWorldをマウント
import HelloMessage from "../../components/HelloMessage.vue";

describe("HelloMessage", () => {
  test("メッセージが表示される", () => {
    const wrapper = mount(HelloMessage, {
      props: {
        name: "World",
      },
    });
    expect(wrapper.text()).toContain("Hello, World!");
    //toContain関数の中にある”Hello, World”が含まれるかをチェックしています。
  });
});

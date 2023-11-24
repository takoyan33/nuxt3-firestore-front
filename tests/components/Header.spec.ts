import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../../components/CommonHeader.vue'

describe('Header', () => {
  test('Headerコンポーネントが表示される', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
  })

  test('タイトルが表示される', () => {
    const wrapper = mount(Header)
    expect(wrapper.find("h4").text()).toContain("Easy To Do");
  })
})

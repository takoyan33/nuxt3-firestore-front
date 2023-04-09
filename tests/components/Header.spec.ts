import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

describe('Header', () => {
  test('Headerコンポーネントが表示される', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
  })

  test('タイトルが表示される', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('h4').text()).toContain('Nuxt Todo App')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GameView from '../GameView.vue'

describe('GameView', () => {
  it('renders properly', () => {
    const wrapper = mount(GameView, { props: {} })
    expect(wrapper.text()).toContain('This is GameView.')
  })
})

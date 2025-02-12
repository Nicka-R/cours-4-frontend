import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'
import WelcomeItem from '../WelcomeItem.vue'
import DocumentationIcon from '../icons/IconDocumentation.vue'
import ToolingIcon from '../icons/IconTooling.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import SupportIcon from '../icons/IconSupport.vue'

describe('TheWelcome', () => {
  it('renders all WelcomeItems with correct icons and headings', () => {
    const wrapper = mount(TheWelcome)

    const items = wrapper.findAllComponents(WelcomeItem)
    expect(items).toHaveLength(5)

    const icons = [
      DocumentationIcon,
      ToolingIcon,
      EcosystemIcon,
      CommunityIcon,
      SupportIcon
    ]

    const headings = [
      'Create Vue project with Vite',
      'Create Github repository',
      'Write test',
      'Create workflow',
      'Enjoy Github page'
    ]

    items.forEach((item, index) => {
      expect(item.findComponent(icons[index]).exists()).toBe(true)
      expect(item.find('h3').text()).toBe(headings[index])
    })
  })
})
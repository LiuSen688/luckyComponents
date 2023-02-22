import Switch from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test switch plugin', () => {
  const app = createApp({}).use(Switch)
  expect(app.component(Switch.name)).toBeTruthy()
})

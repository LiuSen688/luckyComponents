import Menu from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test menu plugin', () => {
  const app = createApp({}).use(Menu)
  expect(app.component(Menu.name)).toBeTruthy()
})

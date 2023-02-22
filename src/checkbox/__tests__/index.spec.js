import Checkbox from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test checkbox plugin', () => {
  const app = createApp({}).use(Checkbox)
  expect(app.component(Checkbox.name)).toBeTruthy()
})

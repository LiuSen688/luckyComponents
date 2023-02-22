import CheckboxGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test checkbox-group plugin', () => {
  const app = createApp({}).use(CheckboxGroup)
  expect(app.component(CheckboxGroup.name)).toBeTruthy()
})

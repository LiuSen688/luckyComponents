import RadioGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test radio-group plugin', () => {
  const app = createApp({}).use(RadioGroup)
  expect(app.component(RadioGroup.name)).toBeTruthy()
})

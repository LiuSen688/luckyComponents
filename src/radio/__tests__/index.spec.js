import Radio from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test radio plugin', () => {
  const app = createApp({}).use(Radio)
  expect(app.component(Radio.name)).toBeTruthy()
})

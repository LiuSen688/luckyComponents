import Steps from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test steps plugin', () => {
  const app = createApp({}).use(Steps)
  expect(app.component(Steps.name)).toBeTruthy()
})

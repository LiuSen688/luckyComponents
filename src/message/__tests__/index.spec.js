import Message from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test message plugin', () => {
  const app = createApp({}).use(Message)
  expect(app.component(Message.name)).toBeTruthy()
})

import Progress from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test progress plugin', () => {
  const app = createApp({}).use(Progress)
  expect(app.component(Progress.name)).toBeTruthy()
})

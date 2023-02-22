import Loading from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test loading plugin', () => {
  const app = createApp({}).use(Loading)
  expect(app.component(Loading.name)).toBeTruthy()
})

import Skeleton from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test skeleton plugin', () => {
  const app = createApp({}).use(Skeleton)
  expect(app.component(Skeleton.name)).toBeTruthy()
})

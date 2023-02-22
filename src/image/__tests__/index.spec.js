import Image from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test image plugin', () => {
  const app = createApp({}).use(Image)
  expect(app.component(Image.name)).toBeTruthy()
})

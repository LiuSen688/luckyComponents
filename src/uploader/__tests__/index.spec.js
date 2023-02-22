import Uploader from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test uploader plugin', () => {
  const app = createApp({}).use(Uploader)
  expect(app.component(Uploader.name)).toBeTruthy()
})

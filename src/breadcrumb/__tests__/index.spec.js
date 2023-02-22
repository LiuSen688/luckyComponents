import Breadcrumb from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test breadcrumb plugin', () => {
  const app = createApp({}).use(Breadcrumb)
  expect(app.component(Breadcrumb.name)).toBeTruthy()
})

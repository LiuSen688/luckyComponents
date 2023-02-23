import Tree from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test tree plugin', () => {
  const app = createApp({}).use(Tree)
  expect(app.component(Tree.name)).toBeTruthy()
})

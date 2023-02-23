// Component entry, the folder where the file exists will be exposed to the user
import Tree from './Tree.vue'
import type { App } from 'vue'

Tree.install = function(app: App) {
  app.component(Tree.name, Tree)
}

export const _TreeComponent = Tree

export default Tree

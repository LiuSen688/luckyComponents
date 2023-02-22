// Component entry, the folder where the file exists will be exposed to the user
import Menu from './Menu.vue'
import type { App } from 'vue'

Menu.install = function (app: App) {
  app.component(Menu.name, Menu)
}

export const _MenuComponent = Menu

export default Menu

// Component entry, the folder where the file exists will be exposed to the user
import Switch from './Switch.vue'
import type { App } from 'vue'

Switch.install = function(app: App) {
  app.component(Switch.name, Switch)
}

export const _SwitchComponent = Switch

export default Switch

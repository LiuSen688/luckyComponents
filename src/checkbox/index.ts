// Component entry, the folder where the file exists will be exposed to the user
import Checkbox from './Checkbox.vue'
import type { App } from 'vue'

Checkbox.install = function(app: App) {
  app.component(Checkbox.name, Checkbox)
}

export const _CheckboxComponent = Checkbox

export default Checkbox

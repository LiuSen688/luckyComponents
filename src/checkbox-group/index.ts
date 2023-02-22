// Component entry, the folder where the file exists will be exposed to the user
import CheckboxGroup from './CheckboxGroup.vue'
import type { App } from 'vue'

CheckboxGroup.install = function(app: App) {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export const _CheckboxGroupComponent = CheckboxGroup

export default CheckboxGroup

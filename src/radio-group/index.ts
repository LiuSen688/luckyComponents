// Component entry, the folder where the file exists will be exposed to the user
import RadioGroup from './RadioGroup.vue'
import type { App } from 'vue'

RadioGroup.install = function(app: App) {
  app.component(RadioGroup.name, RadioGroup)
}

export const _RadioGroupComponent = RadioGroup

export default RadioGroup

// Component entry, the folder where the file exists will be exposed to the user
import Radio from './Radio.vue'
import type { App } from 'vue'

Radio.install = function(app: App) {
  app.component(Radio.name, Radio)
}

export const _RadioComponent = Radio

export default Radio

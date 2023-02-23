// Component entry, the folder where the file exists will be exposed to the user
import Steps from './Steps.vue'
import type { App } from 'vue'

Steps.install = function (app: App) {
  app.component(Steps.name, Steps)
}

export const _StepsComponent = Steps

export default Steps

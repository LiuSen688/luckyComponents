// Component entry, the folder where the file exists will be exposed to the user
import Uploader from './Uploader.vue'
import type { App } from 'vue'

Uploader.install = function(app: App) {
  app.component(Uploader.name, Uploader)
}

export const _UploaderComponent = Uploader

export default Uploader

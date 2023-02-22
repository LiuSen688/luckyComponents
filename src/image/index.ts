// Component entry, the folder where the file exists will be exposed to the user
import Image from './Image.vue'
import type { App } from 'vue'

Image.install = function (app: App) {
  app.component(Image.name, Image)
}

export const _ImageComponent = Image

export default Image

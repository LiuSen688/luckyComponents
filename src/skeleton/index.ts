// Component entry, the folder where the file exists will be exposed to the user
import Skeleton from './Skeleton.vue'
import type { App } from 'vue'

Skeleton.install = function (app: App) {
  app.component(Skeleton.name, Skeleton)
}

export const _SkeletonComponent = Skeleton

export default Skeleton

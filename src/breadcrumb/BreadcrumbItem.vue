<template>
  <span ref="breadcrumbItem" class="luckly-breadcrumb-item breadcrumb-item">
    <span :class="{ 'luckly-breadcrumb-inner': true, Router: isRouter }" @click="onClick">
      <slot />
    </span>
    <span v-show="isEnd">
      {{ separator }}
    </span>
  </span>

  <span class="separator"></span>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, toRefs, ref, computed } from 'vue'
import { breadcrumbItemProps } from './props'

import type { Router } from 'vue-router'
import { breadcrumbKey } from './keys'
import 'bootstrap/dist/css/bootstrap.min.css'

interface ctx {
  separator: string
}
const props = defineProps(breadcrumbItemProps)
const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router

const breadcrumbContext = inject(breadcrumbKey)!
const { separator } = toRefs(breadcrumbContext as ctx)

//
const breadcrumbItem = ref<HTMLDivElement>()
const isEnd = computed(() => {
  return !breadcrumbItem.value?.className.includes('active')
})
const isRouter = computed(() => {
  return props.to
})
//
const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>

<script lang="ts">
export default {
  name: 'LuckyBreadcrumbItem',
}
</script>

<style lang="less">
@import './Breadcrumb.less';
</style>

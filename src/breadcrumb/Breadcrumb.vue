<template>
  <div ref="breadcrumb" class="breadcrumb luckly-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, ref } from 'vue'
import { breadcrumbProps } from './props'
import { breadcrumbKey } from './keys'
import 'bootstrap/dist/css/bootstrap.min.css'

// 将props"透传"给子组件
const props = defineProps(breadcrumbProps)
provide(breadcrumbKey, props)

const breadcrumb = ref<HTMLDivElement>()

onMounted(() => {
  const items = breadcrumb.value!.querySelectorAll('.luckly-breadcrumb-item')
  if (items.length) {
    items[items.length - 1].className += ' active'
  }
})
</script>

<script lang="ts">
export default {
  name: 'LuckyBreadcrumb',
}
</script>

<style lang="less">
@import './Breadcrumb.less';
</style>

<template>
  <div :class="['lucky-skeleton-item', 'lucky-skeleton-' + variant]">
    <!-- <picture-filled v-if="variant === 'image'" /> -->
  </div>
</template>

<script lang="ts" setup>
import { skeletonItemProps } from './props'

defineProps(skeletonItemProps)
</script>

<script lang="ts">
export default {
  name: 'LuckySkeletonItem',
}
</script>
<style lang="less">
@import './skeleton.less';
</style>

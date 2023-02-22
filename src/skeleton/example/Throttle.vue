<script setup>
import LuckySkeleton from '../Skeleton.vue'
import LuckySkeletonItem from '../SkeletonItem.vue'
import LuckyButton from '../../button/Button.vue'
import { ref } from 'vue'

const isLoading = ref(true)
</script>

<template>
  <LuckyButton style="margin: 15px; display: block" @click="isLoading = !isLoading">切换加载状态</LuckyButton>
  <LuckySkeleton :rows="1" :loading="isLoading" :throttle="300">
    <template #default>
      当 Loading 结束之后，我们往往需要显示真实的 UI， 可以通过 loading 属性的值来控制是否显示加载后的 DOM。
      也可以通过具名插槽 default 来构建 loading 结束之后需要展示的真实 DOM 元素结构。
    </template>
  </LuckySkeleton>
</template>

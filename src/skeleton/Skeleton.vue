<template>
  <template v-if="isLoading">
    <div
      class="lucky-skeleton"
      :class="{
        'is-animated': animated,
      }"
      v-bind="$attrs"
    >
      <template v-for="i in count" :key="i">
        <div>
          <slot key="i" name="template">
            <!-- template插槽默认内容 -->
            <LuckySkeletonItem class="is-first" variant="p" />
            <LuckySkeletonItem
              v-for="item in rows"
              :key="item"
              :class="{
                'is-last': item === rows && rows > 1,
              }"
              variant="p"
            />
          </slot>
        </div>
      </template>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs"></slot>
  </template>
</template>

<script setup lang="ts">
import { computed, defineComponent, reactive, toRef } from 'vue'
import { useThrottle } from '../utils/useThrottle'
import { skeletonProps } from './props'
import LuckySkeletonItem from './SkeletonItem.vue'

const props = defineProps(skeletonProps)
const isLoading = useThrottle(toRef(props, 'loading'), props.throttle)

defineExpose({
  /** @description 暴露加载状态 * */
  isLoading,
})
</script>
<script lang="ts">
export default {
  name: 'LuckySkeleton',
}
</script>

<style lang="less">
@import './skeleton.less';
</style>

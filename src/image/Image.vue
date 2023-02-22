<template>
  <div class="lucky-image" :class="[$attrs.class]" :style="containerStyle">
    <!-- v-on支持的事件 -->
    <img
      v-if="imageSrc !== undefined && !hasLoadError"
      :src="imageSrc"
      :style="imageStyle"
      :alt="alt"
      :refererPolicy="referrerPolicy"
      class="lucky-image-inner"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
  <div v-if="isLoading || hasLoadError" class="lucky-image-skeleton">
    <slot v-if="isLoading" name="placeholder">
      <div class="lucky-image-placeholder" />
    </slot>
    <slot v-else-if="hasLoadError" name="error">
      <div class="lucky-image-error">FAILED</div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, onMounted, ref, useAttrs } from 'vue'
import type { CSSProperties, StyleValue } from 'vue'
import { imageProps, imageEmits } from './props'

const imageSrc = ref<string | undefined>()
const hasLoadError = ref(false)
const isLoading = ref(true)
const rawAttrs = useAttrs()
const props = defineProps(imageProps)
const emit = defineEmits(imageEmits)

const imageStyle = computed<CSSProperties>(() => {
  const { fit } = props
  if (fit) return Object.assign(rawAttrs.style as Record<string, unknown>, { objectFit: fit }) as CSSProperties
  return Object.assign((rawAttrs.style as Record<string, unknown>) || {})
})

const containerStyle = computed(() => rawAttrs.style as StyleValue)
const loadImage = () => {
  isLoading.value = true
  imageSrc.value = props.src
}

function handleLoad(event: Event) {
  isLoading.value = false
  hasLoadError.value = false
  emit('load', event)
}

function handleError(event: Event) {
  isLoading.value = false
  hasLoadError.value = true
  emit('error', event)
}

onMounted(() => {
  loadImage()
})
</script>

<script lang="ts">
export default {
  name: 'LucklyImage',
  inheritAttrs: false,
}
</script>
<style lang="less">
@import './image.less';
</style>

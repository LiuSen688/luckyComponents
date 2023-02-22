<template>
  <div class="Lucky-loading">
    <slot></slot>
    <div
      class="wrapper"
      v-show="loadingProps.show"
      :style="{
        position: loadingProps.body ? 'fixed' : 'absolute',
        backgroundColor: loadingProps.background,
      }"
    >
      <div class="d-flex align-items-center justify-content-center flex-column" style="height: 100%">
        <div :class="[spinnerColor, spinnerType]" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed } from 'vue'
import { props } from './props'

const loadingProps = defineProps(props)

const spinnerColor = computed(() => {
  return `text-${loadingProps.color}`
})
const spinnerType = computed(() => {
  return `spinner-${loadingProps.type}`
})
</script>

<script lang="ts">
export default {
  name: 'LuckyLoading',
}
</script>

<style lang="less">
@import './loading.less';
</style>

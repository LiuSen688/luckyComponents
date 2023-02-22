<template>
  <div class="Luckly-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { props } from './props'

const radioGroupProps = defineProps(props)
const emit = defineEmits<{ (event: 'update:modelValue', value: any): void; (event: 'change', value: any): void }>()

provide('radioGroupProps', radioGroupProps)
provide('radioGroupEmit', emit)
</script>

<script lang="ts">
export default {
  name: 'LuckyRadioGroup',
}
</script>

<style lang="less">
@import './radioGroup.less';
</style>

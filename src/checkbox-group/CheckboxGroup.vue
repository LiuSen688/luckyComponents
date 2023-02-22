<template>
  <div class="Lucky-checkbox-group">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { props } from './props'

const checkboxGroupProps = defineProps(props)
const emit = defineEmits<{ (event: 'update:modelValue', value: any): void; (event: 'change', value: any): void }>()

provide('checkboxGroupProps', checkboxGroupProps)
provide('checkboxGroupEmit', emit)
</script>

<script lang="ts">
export default {
  name: 'LuckyCheckboxGroup',
}
</script>

<style lang="less">
@import './checkboxGroup.less';
</style>

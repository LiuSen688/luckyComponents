<template>
  <label
    class="Lucky-checkbox"
    :class="{
      'is-checked': isChecked,
      disabled: (checkboxGroupProps as any ).disabled ? (checkboxGroupProps as any ).disabled : checkboxProps.disabled,
      'is-bordered': checkboxProps.border,
    }"
  >
    <span class="Lucky-checkbox-input">
      <span class="Lucky-checkbox-inner"></span>
      <input
        type="checkbox"
        class="Lucky-checkbox-original"
        :name="checkboxProps.name"
        :value="checkboxProps.label"
        v-model="modelControl"
        :disabled="(checkboxGroupProps as any ).disabled ? (checkboxGroupProps as any ).disabled : checkboxProps.disabled"
      />
    </span>
    <span class="Lucky-checkbox-label">
      <slot>{{ checkboxProps.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { props } from './props'

const checkboxProps = defineProps(props)
const emit = defineEmits<{
  (event: 'update:modelValue', value: any): void
  (event: 'change', value: any): void
}>()

const checkboxGroupProps = inject('checkboxGroupProps', '')
const checkboxGroupEmit = inject('checkboxGroupEmit', '')

const modelControl = computed({
  get() {
    return isCheckboxGroup.value ? (checkboxGroupProps as any).modelValue : checkboxProps.modelValue
  },
  set(newValue) {
    isCheckboxGroup.value
      ? (checkboxGroupEmit as any)('update:modelValue', newValue)
      : emit('update:modelValue', newValue)
    isCheckboxGroup.value ? (checkboxGroupEmit as any)('change', newValue) : emit('change', newValue)
  },
})
const isCheckboxGroup = computed(() => {
  return !!checkboxGroupProps
})
const isChecked = computed(() => {
  if (isCheckboxGroup.value) {
    return (checkboxGroupProps as any).modelValue.includes(checkboxProps.label)
  }
  if (Array.isArray(checkboxProps.modelValue)) {
    return checkboxProps.modelValue.includes(checkboxProps.label)
  }
  return checkboxProps.modelValue
})
</script>

<script lang="ts">
export default {
  name: 'LuckyCheckbox',
}
</script>

<style lang="less">
@import './checkbox.less';
</style>

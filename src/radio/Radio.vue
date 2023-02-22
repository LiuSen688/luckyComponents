<template>
  <label
    class="Lucky-radio"
    :class="{
      'is-checked': radioProps.label === modelControl,
      disabled: (radioGroupProps as any ).disabled ? (radioGroupProps as any ).disabled : radioProps.disabled,
      'is-bordered': radioProps.border,
    }"
  >
    <span class="Lucky-radio-input">
      <span class="Lucky-radio-inner"></span>
      <input
        type="radio"
        class="Lucky-radio-original"
        :name="radioProps.name"
        :value="radioProps.label"
        v-model="modelControl"
        :disabled="(radioGroupProps as any ).disabled ? (radioGroupProps as any ).disabled : radioProps.disabled"
      />
    </span>
    <span class="Lucky-radio-label">
      <slot>{{ radioProps.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { props } from './props'

const radioProps = defineProps(props)
const emit = defineEmits<{
  (event: 'update:modelValue', value: any): void
  (event: 'change', value: any): void
}>()

const radioGroupProps = inject('radioGroupProps', '')
const radioGroupEmit = inject('radioGroupEmit', '')

const modelControl = computed({
  get() {
    return isRadioGroup.value ? (radioGroupProps as any).modelValue : radioProps.modelValue
  },
  set(newValue) {
    isRadioGroup.value ? (radioGroupEmit as any)('update:modelValue', newValue) : emit('update:modelValue', newValue)
    isRadioGroup.value ? (radioGroupEmit as any)('change', newValue) : emit('change', newValue)
  },
})
const isRadioGroup = computed(() => {
  return !!radioGroupProps
})
</script>

<script lang="ts">
export default {
  name: 'LuckyRadio',
}
</script>

<style lang="less">
@import './radio.less';
</style>

<template>
  <div
    class="Lucky-switch"
    :class="{ 'is-checked': switchProps.modelValue, disabled: switchProps.disabled }"
    @click="handleClick"
  >
    <input type="checkbox" class="Lucky-switch-input" ref="input" :name="switchProps.name" />
    <span
      v-if="(switchProps.inactiveIcon || switchProps.inactiveText) && !switchProps.inlinePrompt"
      class="Lucky-switch-lable Lucky-switch-lable-left"
      :class="{ 'is-active': !switchProps.modelValue }"
    >
      <li v-if="switchProps.inactiveIcon" :class="switchProps.inactiveIcon"></li>
      <span v-if="switchProps.inactiveText" class="inactiveText">
        {{ switchProps.inactiveText }}
      </span>
    </span>
    <span class="Lucky-switch-core" ref="switchCore" :style="{ width: switchProps.width }">
      <div v-if="switchProps.inlinePrompt" class="Lucky-switch-inner">
        <li
          v-if="switchProps.activeIcon || switchProps.inactiveIcon"
          :class="{
            [switchProps.activeIcon ?? '']: switchProps.modelValue,
            [switchProps.inactiveIcon ?? '']: !switchProps.modelValue,
          }"
        ></li>
        <span class="isText">
          {{ switchProps.modelValue ? switchProps.activeText : switchProps.inactiveText }}
        </span>
      </div>
      <span class="Lucky-switch-button"></span>
    </span>
    <span
      v-if="(switchProps.activeIcon || switchProps.activeText) && !switchProps.inlinePrompt"
      class="Lucky-switch-lable Lucky-switch-lable-right"
      :class="{ 'is-active': switchProps.modelValue }"
    >
      <li v-if="switchProps.activeIcon" :class="switchProps.activeIcon"></li>
      <span v-if="switchProps.activeText" class="inactiveText">
        {{ switchProps.activeText }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { props } from './props'

const switchProps = defineProps(props)
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
  (event: 'change', value: boolean): void
}>()

const switchCore = ref<HTMLElement | null>(null)
const input = ref<HTMLInputElement | null>(null)

const handleClick = () => {
  if (!switchProps.disabled) {
    emit('update:modelValue', !switchProps.modelValue)
    emit('change', !switchProps.modelValue)
    if (input.value) {
      input.value.checked = !switchProps.modelValue
    }
  }
}
const setColor = (control: boolean) => {
  if (switchCore.value) {
    const color = control ? switchProps.activeColor : switchProps.inactiveColor
    switchCore.value.style.border = color
    switchCore.value.style.background = color
  }
}

onMounted(() => {
  setColor(switchProps.modelValue)
  if (input.value) {
    input.value.checked = switchProps.modelValue
  }
})

watch(
  () => switchProps.modelValue,
  (newValue) => {
    setColor(newValue)
  }
)
</script>

<script lang="ts">
export default {
  name: 'LuckySwitch',
}
</script>

<style lang="less">
@import './switch.less';
</style>

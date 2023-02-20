<template>
  <li class="nav-item" @mouseenter="handleEnter" @click="handleClick" @mouseleave="isActive = false">
    <div :class="{ 'nav-link': true, active: isActive, current: isCurrent, disabled: disabled }">
      <slot />
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted, ref } from 'vue'
import { menuItemProps, menuItemEmits, MenuProvider } from './props'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const props = defineProps(menuItemProps)
const emits = defineEmits(menuItemEmits)

const rootMenu = inject<MenuProvider>('rootMenu')
const isActive = ref(false)
const isCurrent = ref(false)
const instance = getCurrentInstance()
const handleEnter = () => {
  if (props.disabled) return
  if (props.menuTrigger === 'hover') {
    isActive.value = true
  }
}
const handleClick = () => {
  if (props.disabled) return
  if (props.menuTrigger === 'click') {
    emits('click', instance)
    isActive.value = true
  }
}

onMounted(() => {
  if (rootMenu?.activeIndex === props.index) {
    isCurrent.value = true
  }
})
</script>

<style lang="less">
@import './menu.less';
</style>

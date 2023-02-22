<template>
  <li class="nav-item dropdown" @mouseover="handleEnter" @click="handleClick" @mouseleave="handleLeave">
    <div class="mask"></div>
    <div :class="{ 'nav-link': true, 'dropdown-toggle': true, active: isActive, disabled: disabled }">
      <slot name="title"></slot>
    </div>
    <ul class="dropdown-menu" :class="{ show: isShowing }" :style="{ backgroundColor: backgroundColor }">
      <slot></slot>
    </ul>
  </li>
</template>

<script setup lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { subMenuProps, subMenuEmits } from './props'
import type { MenuProvider } from './props'
import type { Ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const props = defineProps(subMenuProps)
const emits = defineEmits(subMenuEmits)
const isActive = ref(false)
const isShowing = ref(false)
const rootMenu = inject<MenuProvider>('rootMenu')
const openMenus = inject<Ref>('openMenus')

const opened = computed(() => {
  return openMenus!.value.includes(props.index)
})

const backgroundColor = ref(rootMenu!.currentColor)
const instance = getCurrentInstance()
const handleEnter = () => {
  if (props.disabled) return
  if (props.menuTrigger === 'hover') {
    isActive.value = true
    isShowing.value = true
  }
}
const handleClick = () => {
  if (props.disabled) return
  if (props.menuTrigger === 'click') {
    emits('click', instance)
    isActive.value = true
    isShowing.value = true
  }
}
const handleLeave = () => {
  if (props.disabled) return
  if (props.menuTrigger === 'hover') {
    isActive.value = false
    isShowing.value = false
  }
}

watch(opened, (opened) => {
  if (opened) {
    isShowing.value = true
  } else {
    isShowing.value = false
  }
})

// onMounted(()=>{
//   console.log(rootMenu?.openedMenus)
//   if(opened.value){
//     isShowing.value = true
//   }
// })
</script>
<style lang="less">
@import './menu.less';
</style>

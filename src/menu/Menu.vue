<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <ul class="navbar-nav" :style="{ 'background-color': backgroundColor }">
        <slot :menu-trigger="menuTrigger"></slot>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, onUpdated, provide, reactive, ref } from 'vue'
import { menuProps, menuEmits, MenuProvider } from './props'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const props = defineProps(menuProps)
const emits = defineEmits(menuEmits)
// 注意type是 String[],而ts用的是string
const openedMenus = ref<string[]>(props.defaultOpeneds.length ? props.defaultOpeneds.slice(0) : [])
const activeIndex = ref(props.defaultActive)
const currentColor = ref<string>(props.backgroundColor)
const openMenu: MenuProvider['openMenu'] = (index: string) => {
  if (openedMenus.value.includes(index)) return false
  openedMenus.value.push(index)
  emits('open', index)
  return true
}

const closeMenu: MenuProvider['closeMenu'] = (index: string) => {
  if (openedMenus.value.includes(index)) {
    openedMenus.value = openedMenus.value.filter((item) => item !== index)
    emits('close', index)
    return true
  }
  return false
}

provide('openMenus', openedMenus)
provide('rootMenu', reactive({ activeIndex, currentColor }))
onMounted(() => {
  for (let i = 0; i < openedMenus.value.length; i++) {
    openMenu(openedMenus.value[i] as string)
  }
})

defineExpose({ open: openMenu, close: closeMenu })
</script>
<script lang="ts">
export default {
  name: 'LuckyMenu',
}
</script>

<style lang="less">
@import './menu.less';
</style>

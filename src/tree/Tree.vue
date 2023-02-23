<template>
  <div class="tree">
    <MeNu>
      <template v-for="menu in props.menuList">
        <MenuItem :key="menu.title" v-if="!menu.children">{{ menu.title }}</MenuItem>
        <ReSubMenu :key="menu.title + 1" v-else :data="menu"></ReSubMenu>
      </template>
    </MeNu>
  </div>
</template>

<script setup lang="ts">
import MeNu from './MeNu.vue'
import MenuItem from './MenuItem.vue';
import ReSubMenu from './ReSubMenu.vue';
import { props1 } from './props'

const props = defineProps(props1)
</script>

<style  scoped  lang="less"></style>

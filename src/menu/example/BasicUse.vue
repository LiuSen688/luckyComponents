<template>
  <LuckyMenu :default-active="'1'">
    <LuckyMenuItem :index="'1'"> 主页 </LuckyMenuItem>

    <LuckyMenuItem disabled>
      <a aria-current="page" href="#">项目1</a>
    </LuckyMenuItem>
    <LuckyMenuItem>
      <a aria-current="page" href="#" disabled>项目2</a>
    </LuckyMenuItem>

    <LuckySubMenu :index="'3'">
      <template #title>信息 </template>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息1</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息2</a>
      </LuckyMenuItem>

      <LuckyMenuItem>
        <a aria-current="page" href="#">信息3</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息4</a>
      </LuckyMenuItem>
    </LuckySubMenu>
  </LuckyMenu>

  <LuckyMenu :default-active="'1'" :background-color="'rgba(182, 178, 178,0.5)'">
    <LuckyMenuItem :index="'1'"> 主页 </LuckyMenuItem>
    <LuckySubMenu>
      <template #title>信息 </template>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息1</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息2</a>
      </LuckyMenuItem>

      <LuckyMenuItem>
        <a aria-current="page" href="#">信息3</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息4</a>
      </LuckyMenuItem>
    </LuckySubMenu>
  </LuckyMenu>
</template>

<script setup>
import LuckyMenu from '../Menu'
import LuckyMenuItem from '../MenuItem'
import LuckySubMenu from '../SubMenu'
</script>

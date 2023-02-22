<script setup lang="ts">
import LuckyLoading from '../index'
import LuckyButton from '../../button/Button.vue'
</script>

<template>
  <LuckyLoading color="dark" background="rgba(52, 57, 63, 0.7)">
    <div>
      <LuckyButton type="primary" class="marBottom">默认按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="success" class="marBottom">成功按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">危险按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="warning" class="marBottom">警告按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">黑暗按钮</LuckyButton>
    </div>

    <template #content>
      <h4>Loading</h4>
    </template>
  </LuckyLoading>
</template>

<style scoped lang="less">
.marBottom {
  margin-bottom: 6px;
}
</style>
,

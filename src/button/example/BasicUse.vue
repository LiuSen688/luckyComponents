<script setup>
import LuckyButton from '../Button.vue'
</script>

<template>
    <LuckyButton class="btnMargin" type="primary">默认按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="success">成功按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="danger">错误按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="warning">警告按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="dark">黑白按钮</LuckyButton>
</template>
<style scoped>
.btnMargin {
  margin-left: 10px;
}
</style>

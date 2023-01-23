<script setup>
import LuckyButton from '../Button.vue'
</script>

<template>
    <LuckyButton class="btnMargin" type="primary" round>默认按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="success" round>成功按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="danger" round>错误按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="warning" round>警告按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="dark" round>黑白按钮</LuckyButton>
</template>
<style scoped>
.btnMargin {
  margin-left: 10px;
}
</style>

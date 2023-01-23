<script setup>
import LuckyButton from '../Button.vue'
</script>

<template>
    <LuckyButton class="btnMargin" type="primary" plain>默认按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="success" plain>成功按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="danger" plain>错误按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="warning" plain>警告按钮</LuckyButton>
    <LuckyButton class="btnMargin" type="dark" plain>黑白按钮</LuckyButton>
</template>
<style scoped>
.btnMargin {
  margin-left: 10px;
}
</style>

<script setup lang="ts">
import LuckyLoading from '../index'
import LuckyButton from '../../button/Button.vue'

import { ref } from 'vue'

const lightWrapper = ref(false)
const darkWrapper = ref(false)

const lightSwich = () => {
  lightWrapper.value = true
  setTimeout(() => {
    lightWrapper.value = false
  }, 2000)
}
const darkSwich = () => {
  darkWrapper.value = true
  console.log(darkWrapper.value)

  setTimeout(() => {
    darkWrapper.value = false
  }, 2000)
}
</script>

<template>
  <LuckyLoading body :show="lightWrapper">
    <LuckyButton type="primary" @click="lightSwich">白天</LuckyButton>
  </LuckyLoading>
  <LuckyLoading body :show="darkWrapper" background="rgba(52, 57, 63, 0.7)" color="dark">
    <LuckyButton type="dark" @click="darkSwich">黑夜</LuckyButton>
  </LuckyLoading>
</template>

<style scoped lang="less">
.Lucky-loading {
  margin: 20px 0;
}
</style>

<script setup>
import LuckySwitch from '../index'
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>

<template>
  <div class="mb">
    <Lucky-switch
      v-model="value1"
      active-text="木子"
      inactive-text="亭"
      active-color="green"
      inactive-color="yellow"
    ></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value2" active-text="ziMu" inactive-text="wuLuo"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch class="mr" v-model="value3" active-text="是" inactive-text="否" inline-prompt></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value4"
      active-text="Y"
      inactive-text="N"
      active-color="green"
      inactive-color="red"
      inline-prompt
    ></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value5"
      active-text="是是是是"
      inactive-text="对对对"
      inline-prompt
      width="40px"
    ></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value6"
      active-text="干净澄澈，真诚自然"
      inactive-text="无光"
      active-color="green"
      inactive-color="red"
      inline-prompt
    ></Lucky-switch>
  </div>
</template>

<style>
.mb {
  margin-bottom: 8px;
}
.mr {
  margin-right: 16px;
}
</style>

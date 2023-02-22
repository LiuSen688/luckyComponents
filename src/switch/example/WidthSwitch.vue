<script setup>
import LuckySwitch from '../index'
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>

<template>
  <div class="mb">
    <Lucky-switch v-model="value1" width="100px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value2" width="200px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value3" width="300px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
</template>

<style>
.mb {
  margin-bottom: 8px;
}
</style>

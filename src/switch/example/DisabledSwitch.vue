<script setup>
import LuckySwitch from '../index'
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>

<template>
  <Lucky-switch class="mr" v-model="value1" disabled></Lucky-switch>
  <Lucky-switch class="mr" v-model="value2" active-color="green" inactive-color="red"></Lucky-switch>
</template>

<style>
.mr {
  margin-right: 15px;
}
</style>

<script lang="ts" setup>
import LuckySwitch from '../index'
import { ref } from 'vue'

const value1 = ref<boolean>(true)
const value2 = ref<boolean>(true)
</script>

<template>
  <Lucky-switch class="mr" v-model="value1"></Lucky-switch>
  <Lucky-switch class="mr" v-model="value2" active-color="green" inactive-color="red"></Lucky-switch>
</template>

<style>
.mr {
  margin-right: 15px;
}
</style>

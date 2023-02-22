<script setup lang="ts">
import LuckyRadio from '../index'
import { ref } from 'vue'

const radioValue = ref<any>('LOVE')
</script>

<template>
  <Lucky-radio label="LOVE" v-model="radioValue" border>春</Lucky-radio>
  <Lucky-radio label="MOVE" v-model="radioValue" border>秋</Lucky-radio>
</template>

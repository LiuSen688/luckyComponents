<script setup lang="ts">
import LuckyRadio from '../index'
import { ref } from 'vue'

const radioValue = ref<any>('ziMu')
</script>

<template>
  <Lucky-radio label="Ting" v-model="radioValue">亭</Lucky-radio>
  <Lucky-radio label="ziMu" v-model="radioValue">子木</Lucky-radio>
</template>

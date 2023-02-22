<script setup lang="ts">
import LuckyRadio from '../index'
import { ref } from 'vue'

const radioValue = ref<any>('two')
</script>

<template>
  <Lucky-radio label="one" v-model="radioValue" disabled>option1</Lucky-radio>
  <Lucky-radio label="two" v-model="radioValue" disabled>option2</Lucky-radio>
</template>

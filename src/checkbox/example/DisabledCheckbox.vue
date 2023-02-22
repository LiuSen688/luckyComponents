<script lang="ts" setup>
import { ref } from 'vue'
import LuckyCheckbox from '../index'

const checkboxValue = ref<string[]>(['亭'])
</script>

<template>
  <LuckyCheckbox label="亭" v-model="checkboxValue" disabled>亭</LuckyCheckbox>
  <LuckyCheckbox label="子木" v-model="checkboxValue" disabled>子木</LuckyCheckbox>
</template>

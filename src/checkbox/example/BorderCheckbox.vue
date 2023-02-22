<script lang="ts" setup>
import { ref } from 'vue'
import LuckyCheckbox from '../index'
import LuckyCheckboxGroup from '../../checkbox-group/CheckboxGroup.vue'

const checkboxValue = ref<string[]>(['spring', 'winter'])
</script>

<template>
  <LuckyCheckboxGroup v-model="checkboxValue">
    <LuckyCheckbox label="spring" border>春</LuckyCheckbox>
    <LuckyCheckbox label="summer" border>夏</LuckyCheckbox>
    <LuckyCheckbox label="autumn" disabled border>秋</LuckyCheckbox>
    <LuckyCheckbox label="winter" disabled border>冬</LuckyCheckbox>
  </LuckyCheckboxGroup>
</template>

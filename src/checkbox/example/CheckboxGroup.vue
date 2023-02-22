<script lang="ts" setup>
import { ref } from 'vue'
import LuckyCheckbox from '../index'
import LuckyCheckboxGroup from '../../checkbox-group/CheckboxGroup.vue'

const checkboxValue = ref<string[]>(['spring', 'winter'])
</script>

<template>
  <LuckyCheckboxGroup v-model="checkboxValue">
    <LuckyCheckbox label="spring">春</LuckyCheckbox>
    <LuckyCheckbox label="summer">夏</LuckyCheckbox>
    <LuckyCheckbox label="autumn" disabled>秋</LuckyCheckbox>
    <LuckyCheckbox label="winter" disabled>冬</LuckyCheckbox>
  </LuckyCheckboxGroup>
</template>

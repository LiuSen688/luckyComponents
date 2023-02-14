<script setup lang="ts">
import LuckyRadio from '../index'
import LuckyRadioGroup from '../../radio-group/index'
import { ref } from 'vue'

const radioValue = ref<any>('one')

const fn = (newValue: any) => {
  console.log(newValue)
}
</script>

<template>
  <LuckyRadioGroup v-model="radioValue" @change="fn">
    <LuckyRadio label="one">option1</LuckyRadio>
    <LuckyRadio label="two">option2</LuckyRadio>
    <LuckyRadio label="three">option3</LuckyRadio>
  </LuckyRadioGroup>
</template>

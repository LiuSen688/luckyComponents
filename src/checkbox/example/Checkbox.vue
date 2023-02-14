<script lang="ts" setup>
import { ref } from 'vue'
import LuckyCheckbox from '../index'

const checkboxValue = ref([])
</script>

<template>
  <LuckyCheckbox label="男" v-model="checkboxValue">男</LuckyCheckbox>
  <LuckyCheckbox label="女" v-model="checkboxValue">女</LuckyCheckbox>
</template>

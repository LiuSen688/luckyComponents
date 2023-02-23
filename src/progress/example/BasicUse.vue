<script setup>
import LucklyProgress from '../Progress.vue'

</script>

<template>
  <LucklyProgress :percentage="0" cwidth="20" />
  <LucklyProgress :percentage="40" pcolor="orange" cwidth="20" />
  <LucklyProgress :percentage="60" status="success" />
  <LucklyProgress :percentage="80" status="failure" />
</template>

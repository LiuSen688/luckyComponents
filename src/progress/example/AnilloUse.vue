<script setup>
import LucklyProgress from '../Progress.vue'

</script>

<template>
    <LucklyProgress :percentage="0" textInside="true" />
    <LucklyProgress :percentage="40" textInside="true" />
    <LucklyProgress :percentage="60" textInside="true" status="success" />
    <LucklyProgress :percentage="80" textInside="true" status="failure" />
</template>

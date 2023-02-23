<script setup>
import LucklySteps from '../Steps.vue'
import button from '../../../.varlet/site/components/button';
import { ref } from "vue"

const lichange = ref()
const clickson = () => {
    lichange.value.nextchange()
}

</script>

<template>
    <LucklySteps ref="lichange" :totalWidth="900" :descMaxWidth="160" @change="onChange" />
    <button @click="clickson" class="button">Next step</button>
</template>

<style scoped>
.button {
    width: 100px;
    margin-left: 50px;
    height: 32px;
    color: #606266;
    line-height: 1;
    border: 2px solid #cecece !important;
}
</style>
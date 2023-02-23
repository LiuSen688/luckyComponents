<template>
    <div>
        <div class="title" @click="change">
            <img class="imgss" src="./source/select.png" />
            <slot name="title"></slot>
            <!--name='title'区分插槽 -->
        </div>
        <div class="sub" v-show="flag">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const flag = ref(false)

const change = () => {
    flag.value = !flag.value

}

</script>
<style lang="less" scoped>
.sub {
    padding-left: 20px;
}
</style>
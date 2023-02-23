<template>
    <div class="menu">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>
<script setup lang="ts" >

</script>
<style lang="less" scoped>
.menu {
    padding-top: 20px;
    padding-bottom: 20px;

    ul {

        list-style: none;

        li {
            padding-top: 5px;

            .imgs {
                margin-right: 5px;
            }

            .imgss {
                margin-right: 5px;

            }
        }



    }
}
</style>
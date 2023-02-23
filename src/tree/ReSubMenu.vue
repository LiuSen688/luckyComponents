<template>
    <SubMenu>
        <template #title><!--#title为了标识区分插槽-->
            {{ props.data.title }}
        </template>
        <template v-for="child in props.data.children">
            <MenuItem :key="child.title" v-if="!child.children">{{ child.title }}</MenuItem>
            <!--ReSubMenu跟name的名字保持一致，相当于循环使用该组件-->
            <ReSubMenu v-else :key="child.title + 1" :data="child"></ReSubMenu>
        </template>
    </SubMenu>
</template>
<script setup lang="ts">
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'
import { defineProps } from "vue"

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }

})

</script>
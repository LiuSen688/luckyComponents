<script setup>
import LucklyTree from '../Tree.vue'

const menuList = [
    {
        title: '字节跳动',
        children: [
            {
                title: '今日头条',
                children: [
                    { title: '快马' },
                    { title: '花熊' },
                    { title: '懂车帝' }
                ]
            },
            { title: '抖音' },
            { title: '火山小视频' }
        ]
    },
    {
        title: '巨量算数',
        children: [
            {
                title: '数字化营销服务平台',
                children: [
                    { title: '小荷健康' },
                    { title: 'Faceu激萌' },
                    { title: '轻颜相机' }
                ]
            },
            { title: '火山引擎' },
            { title: '大力教育' }
        ]
    },
    { title: '巨量引擎' }
]
</script>

<template>
    <luckly-tree :menuList=menuList></luckly-tree>
</template>

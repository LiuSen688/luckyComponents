<script setup>
import LuckyBreadcrumb from '../Breadcrumb.vue'
import LuckyBreadcrumbItem from '../BreadcrumbItem.vue'
</script>

<template>
  <LuckyBreadcrumb separator="/" :a="a">
    <LuckyBreadcrumbItem :to="{ path: '/' }">homepage</LuckyBreadcrumbItem>
    <LuckyBreadcrumbItem><a href="/">promotion management</a></LuckyBreadcrumbItem>
    <LuckyBreadcrumbItem>promotion list</LuckyBreadcrumbItem>
    <LuckyBreadcrumbItem>promotion detail</LuckyBreadcrumbItem>
  </LuckyBreadcrumb>
</template>
<style scoped>
.btnMargin {
  margin-left: 10px;
}
</style>

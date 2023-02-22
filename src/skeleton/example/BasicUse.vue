<script setup>
import LuckySkeleton from '../Skeleton.vue'
import LuckySkeletonItem from '../SkeletonItem.vue'
</script>

<template>
  <LuckySkeleton />
  <br />
  <LuckySkeleton style="--lucky-skeleton-circle-size: 50px">
    <template #template>
      <Lucky-skeleton-item variant="circle" />
    </template>
  </LuckySkeleton>
</template>

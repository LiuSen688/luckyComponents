<script setup>
import LuckyImage from '../Image.vue'

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <LuckyImage style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<style scoped>
.demo-image {
  display: flex;
}
.demo-image .block {
  padding: 30px 0;
  border-right: solid 1px rgba(128, 128, 128, 0.515);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20%;
  box-sizing: border-box;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: gray;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

<template>
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
      <LuckyImage :src="src" />
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      <LuckyImage :src="src">
        <template #error>
          <div class="image-slot">不好意思加载失败了</div>
        </template>
      </LuckyImage>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LuckyImage from '../Image.vue'

const src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpe'
</script>

<style scoped>
.demo-image__error {
  display: flex;
}
.demo-image__error .block {
  padding: 30px 0;
  border-right: solid 1px rgba(128, 128, 128, 0.515);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
}
.demo-image__error .block:last-child {
  border-right: none;
}
.demo-image__error .demonstration {
  display: block;
  color: rgb(143, 143, 143);
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
}
.demo-image__error .lucky-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: rgb(143, 143, 143);
  font-size: 14px;
}
.demo-image__error .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style>

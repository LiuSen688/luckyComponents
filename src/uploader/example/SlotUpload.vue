<template>
  <div>
    <LucklyUploader :file-list="fileList" type="image" @get-files="handleGetFiles" @delete-files="deleteFiles">
      <div class="iconWrap">
        <span class="iconfont icon-jiajianzujianjiahao"></span>
      </div>
    </LucklyUploader>
  </div>
</template>

<script setup>
import LucklyUploader from '../Uploader.vue'
import '../../../public/icomfont.css'
import { reactive } from 'vue'

const fileList = reactive([
  {
    name: 'element-plus-logo.svg',
    url: 'https://s1.ax1x.com/2022/08/09/v1pt5F.png',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://s1.ax1x.com/2022/08/12/vJaAXT.jpg',
  },
  {
    name: 'element-plus-logo.svg',
    url: 'https://s1.ax1x.com/2022/08/09/v1pt5F.png',
  },
])
</script>

<style lang="less" scoped>
.myImg {
  width: 200px;
  height: 200px;
  margin-right: 5px;
}
.iconWrap {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(233, 233, 233);
  cursor: pointer;
  span {
    font-size: 30px;
    color: #ccc;
  }
}
</style>

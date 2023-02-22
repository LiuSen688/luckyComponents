<template>
  <div>
    <LucklyUploader :limit=1 multiple type="file" :file-list="fileList" @get-files="handleGetFiles" @delete-files="deleteFiles"></LucklyUploader>
  </div>
</template>

<script setup>
import LucklyUploader from '../Uploader.vue'

import { reactive } from 'vue'

const fileList = reactive([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleGetFiles = (val) => {
  val.forEach((item) => {
    const obj = {}
    obj.name = item.name
    obj.url = ''
    fileList.push(obj)
  })
}
const deleteFiles = (index)=>{
  fileList.splice(index,1);
}
</script>

<style lang="scss" scoped></style>

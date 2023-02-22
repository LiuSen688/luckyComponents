<template>
  <!-- 上传组件 -->
  <div class="file-upload">
    <div class="" v-bind="$attrs" style="display: flex">
      <div v-if="type == 'image'">
        <template v-for="(file, index) in fileList" :key="index">
          <img :src="file.url" class="rounded myImg" @click="handlePreviewImg(file.url)"/>
        </template>
      </div>
      <div @click.prevent="triggerUpload">
        <slot>
          <button class="btn btn-primary">上传文件</button>
        </slot>
      </div>
    </div>

    <input type="file" class="file-input d-none" ref="fileInput" @change="handleFileChange" :multiple="multiple" :accept="accept" />
    <!-- 文件 -->
    <div class="fileList_box" v-if="type == 'file'">
      <li v-for="(file, index) in fileList" :key="index">
        <span>{{ file.name }}</span>
        <button type="button" class="btn-close" aria-label="Close" style="font-size: 10px" @click="handleClose(index)"></button>
      </li>
    </div>
  </div>
  <PreviewImg :img-url="previewImg" v-if="isShowImg"></PreviewImg>
  <!-- <div v-if="isShowImg">
      <div class="h-100 w-100 loading-container"></div>
      <div class="modal-dialog modal-dialog-centered fixed-top modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="handleImgClose"></button>
          </div>
          <div class="modal-body">
            <img :src="previewImg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div> -->
</template>
<script lang="ts">
export default {
  name: 'SenUploader',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import PreviewImg from './PreviewImg.vue'
// eslint-disable-next-line import/first
import { ref, PropType, reactive, computed } from 'vue'
// eslint-disable-next-line import/first
import useDOMCreate from '../utils/useDOMCreate'
// eslint-disable-next-line import/first
import createMessage from '../utils/createMessage'

export interface fileList {
  name: string
  url: string
}

type CheckFunction = (file: File) => boolean

const props = defineProps({
  beforeUpload: Function as PropType<CheckFunction>,
  actions: String,
  multiple: Boolean,
  fileList: Array as PropType<fileList[]>,
  type: String,
  limit: Number
})
const emits = defineEmits(['get-files', 'delete-files'])
// 获取 input 的DOM实例对象 间接触发 input 的点击事件
const fileInput = ref<HTMLInputElement | null>(null)

// 选择文件列表数组
let filesArr: File[] = reactive([])

const previewImg = ref('');
const isShowImg = ref(false);

// eslint-disable-next-line vue/return-in-computed-property
const accept = computed(() => {
  if (props.type === 'file') {
    return '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }
  if (props.type === 'image') {
    return 'image/*'
  }
})

useDOMCreate('showImg')

// 间接触发 input 的点击事件回调函数
const triggerUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
// input 发生改变时触发的回调函数 --- 验证上传的文件是否合法，然后处理文件并发送请求
const handleFileChange = (e: Event) => {
  const currentTarget = e.target as HTMLInputElement
  if (currentTarget.files) {
    // 将input身上的files对象转换为数组类型
    const files = Array.from(currentTarget.files)
    // 限制文件上传个数
    if(props.limit) {
      if(files.length > props.limit) {
        createMessage(`文件最多只能上传${props.limit}个`, 'warning', false, 2000)
        return false;
      }
    }
    filesArr.push(...files)
    // 如果有上传限制，则对文件进行判断
    if (props.beforeUpload) {
      // 调用判断文件是否合法的函数---由父组件自定义设置
      const result = props.beforeUpload(files[0])
      // 如果不合法就直接返回出去
      if (!result) return
    }
    // 上传之前要处理一下文件 因为文件是二进制的，要利用 FormData 实例对象进行处理
    const formData = new FormData()
    // append方法把文件添加到 FormData实例对象中 第一个参数：文件名 第二个参数：要上传的文件
    formData.append('smfile', files[0])
    console.log('选择的文件列表: ', filesArr)
    emits('get-files', filesArr)
    filesArr = []
  }
}

const handleClose = (index: number) => {
  emits('delete-files', index)
}

const handlePreviewImg = (val:string)=>{
  isShowImg.value = !isShowImg.value
  previewImg.value = val
}

const handleImgClose = ()=>{
  isShowImg.value = !isShowImg.value
}
</script>
<style scoped lang="less">
.fileList_box {
  width: 400px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.myImg {
  width: 200px;
  height: 200px;
  margin-right: 5px;
}
</style>

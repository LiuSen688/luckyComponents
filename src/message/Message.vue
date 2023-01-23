<template>
  <div
    class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
    :class="classObject"
    v-if="isVisible"
    role="alert"
  >
    <div>
      <slot>
        <span>{{ message }}</span>
      </slot>
    </div>
    <button type="button" class="btn-close" aria-label="Close" v-if="closeable" @click="handleClose"></button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LuckyMessage',
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { ref, PropType } from 'vue'

type MessageType = 'success' | 'error' | 'default' | 'warning'

const props = defineProps({
  type: {
    type: String as PropType<MessageType>,
    default: 'default',
  },
  message: String,
  closeable: Boolean,
})

// 是否显示提示栏的标志
const isVisible = ref(true)
// 显示哪种类型的提示栏
const classObject = {
  'alert-success': props.type === 'success',
  'alert-danger': props.type === 'error',
  'alert-primary': props.type === 'default',
  'alert-warning': props.type === 'warning',
}
// 点击取消后调用的函数
const handleClose = () => {
  isVisible.value = false
}
</script>

<template>
  <div>
    <LuckyMessage v-if="isShow" :message="message" :type="type"></LuckyMessage>
  </div>
  <LuckyButton class="btnMargin" type="primary" plain @click="handleMessage">Message</LuckyButton>
  <LuckyButton class="btnMargin" type="success" plain @click="handleSuccess">Success</LuckyButton>
  <LuckyButton class="btnMargin" type="danger" plain @click="handleError">Error</LuckyButton>
  <LuckyButton class="btnMargin" type="warning" plain @click="handleWarning">Warning</LuckyButton>
</template>

<script setup>
import LuckyMessage from '../Message.vue'
import LuckyButton from '../../button/Button.vue'
import createMessage from '../../utils/createMessage'
import { ref } from 'vue'

const message = ref('')
const type = ref('')
const isShow = ref(false)

const handleMessage = () => {
  message.value = 'This is a Message message'
  type.value = 'default'
  createMessage(message.value, type.value, true, 1500)
}
const handleSuccess = () => {
  message.value = 'This is a Success message'
  type.value = 'success'
  createMessage(message.value, type.value, true, 1500)
}
const handleError = () => {
  message.value = 'This is a Error message'
  type.value = 'error'
  createMessage(message.value, type.value, true, 1500)
}
const handleWarning = () => {
  message.value = 'This is a Warning message'
  type.value = 'warning'
  createMessage(message.value, type.value, true, 1500)
}
</script>

<style scoped>
.btnMargin {
  margin-left: 10px;
}
</style>

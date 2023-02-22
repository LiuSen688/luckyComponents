<template>
  <LuckyMessage v-if="isShow" :message="message" :type="type">
    <h4>Well done!</h4>
    <div>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </div>
  </LuckyMessage>
  <LuckyButton class="btnMargin" type="primary" plain @click="handleMessage">点击展示</LuckyButton>
</template>

<script setup>
import LuckyMessage from '../Message.vue'
import LuckyButton from '../../button/Button.vue'
import { ref } from 'vue'

const message = ref('')
const type = ref('')
const isShow = ref(false)
const handleMessage = () => {
  type.value = 'default'
  isShow.value = true
  // setTimeout(() => {
  //   isShow.value = false
  // }, 1500)
}
</script>

<style scoped>
.btnMargin {
  margin-left: 10px;
}
.varlet-site-doc {
  margin: 0;
}
</style>

<template>
  <Teleport to="#showImg">
    <div v-if="isShow">
      <div class="h-100 w-100 loading-container"></div>
      <div class="modal-dialog modal-dialog-centered fixed-top modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="handleClose"></button>
          </div>
          <div class="modal-body">
            <img :src="props.imgUrl" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    imgUrl: String
})
const isShow = ref(true);
const handleClose = ()=>{
    isShow.value = !isShow.value
}
</script>

<style lang="less" scoped>
.loading-container {
  background: rgba(153, 152, 152, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
.modal-content {
  max-height: 700px;
}
</style>

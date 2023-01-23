<template>
  <button type="button" :class="[btnType, round ? 'round' : '']">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  disable: Boolean,
  plain: Boolean,
  round:Boolean
})

const btnType = computed(() => {
  if (props.plain) {
    return `btn btn-outline-${props.type}`
  }
  return `btn btn-${props.type}`
})
</script>
<script lang="ts">
export default {
  name: 'LuckyButton',
}
</script>

<style lang="less">
.round {
  border-radius: 15px;
}
</style>

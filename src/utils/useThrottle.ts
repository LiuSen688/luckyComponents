import { ref, onMounted, watch } from 'vue'

export const useThrottle = (loading: Ref<boolean>, delay = 0) => {
  // 不进行节流,对ref没有处理
  if (delay === 0) return loading
  const throttleLoading = ref(false)
  let timer
  const setLoading = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      throttleLoading.value = loading.value
    }, delay)
  }

  onMounted(setLoading)

  // 只有loading从false变为true这个行为，需要节流
  watch(loading, (loading) => {
    if (!loading.value) {
      setLoading()
    } else {
      throttleLoading.value = loading.value
    }
  })
  return throttleLoading
}

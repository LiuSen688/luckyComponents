<template>
  <div class="progress " :class="'progress--' + ptype">
    <!-- 条形进度条 -->
    <div class="progress-bar" v-if="ptype === 'line'">
      <div class="progress-bar__outer" :style="{ height: strokeHeight + 'px' }">
        <div class="progress-bar__inner" :style="barStyle">
          <!-- 进度条内显示百分比 -->
          <div v-if="textInside" class="progress__text" style="color:black;"> {{ percentage }}% </div>
        </div>
      </div>

    </div>
    <!-- 环形进度条 采用SVG实现 -->
    <div class="progress_circle" :style="{ width: cwidth + 'px', height: cwidth + 'px' }" v-else>
      <svg viewBox="0 0 100 100" :style="{ width: cwidth + 'px', height: cwidth + 'px' }">
        <!-- 背景圆形 -->
        <path :d="trackPath" fill="none" :stroke-width="relativeStrokeHeight" stroke="#e5e9f2" />
        <!-- 进度圆形 -->
        <path :d="trackPath" fill="none" :stroke-width="relativeStrokeHeight" :stroke="stroke" :style="circlePathStyle"
          stroke-linecap="round" />
      </svg>
    </div>
    <div v-if="!textInside" class="progress__text" :style="{ fontSize: progressTextSize + 'px' }">
      <template v-if="!status"> {{ percentage }}% </template>
      <i v-else class="icon" :class="iconCls"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { props1 } from './props';

const props = defineProps(props1)

const progressTextSize = computed(() => {
  return 9 + props.strokeHeight * 0.4;
})
const stroke = computed(() => {
  let color: string;
  if (props.pcolor) {
    return props.pcolor;
  }
  switch (props.status) {
    case 'success':
      color = '#13ce66';
      break;
    case 'failure':
      color = '#ff4949';
      break;
    default:
      color = '#20a0ff';
      break;
  }
  return color;
})
const barStyle = computed(() => {
  return { width: props.percentage + '%', backgroundColor: stroke.value }
})
const iconCls = computed(() => {
  if (props.ptype === 'line') {
    // 如果是线性进度条
    return props.status === 'success' ? 'icon-circle-check' : 'icon-circle-close';
  }

  return props.status === 'success' ? 'icon-check' : 'icon-close';

})
const trackPath = computed(() => {
  const radius = 50 - relativeStrokeHeight.value / 2;
  return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2 + ' ';

})
const relativeStrokeHeight = computed(() => {
  return props.strokeHeight * 100 / props.cwidth;
})
const perimeter = computed(() => {
  const radius = 50 - relativeStrokeHeight.value / 2;
  return 2 * Math.PI * radius;
})
const circlePathStyle = computed(() => {

  return {
    strokeDasharray: '' + perimeter.value + 'px,' + perimeter.value + 'px',
    strokeDashoffset: (1 - props.percentage / 100) * perimeter.value + 'px',

  }
})

</script> 
<style scoped >
.progress {
  margin: 10px;
  /* border: 1px solid #ffbbff; */
}

.progress-bar {
  display: inline-block;
  width: 98%;
  background-color: #ebeef5;
  box-sizing: border-box;
  /* 盒模型的方式 */
  margin-right: -50px;
  padding-right: 50px;
}

.progress-bar__outer {
  width: 100%;
  border-radius: 10px;
  background-color: #ebeef5;
}

.progress-bar__inner {
  /* width: 60%; */
  background-color: rebeccapurple;
  border-radius: 10px;
  height: 100%;
  transition: width 0.6s ease;
  text-align: right;
  line-height: 80%;
}

.progress__text {
  font-size: 12px;
  margin-left: 6px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 126px;
  height: 126px;
}

.icon-circle-close,
.icon-close {
  font-family: 'Wingdings';
  color: red;
}

.icon-circle-check,
.icon-check {
  font-family: 'Wingdings';
  color: seagreen;
}

.icon-circle-close::before {
  content: '\FD' !important;
}

.icon-close::before {
  content: '\FB' !important;
}

.icon-circle-check::before {
  content: '\FE' !important;
}

.icon-check::before {
  content: '\FC' !important;
}

.progress_circle {

  /* 环形进度条 */
}

.progress--circle {
  display: inline-block;
  position: relative;
}

.progress--circle .progress__text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0px;
  text-align: center;
  width: 100%;
}
</style>

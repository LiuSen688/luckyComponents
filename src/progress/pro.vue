<template>
    <div class="progress" :style="{ width, height }">
        <svg viewBox="0 0 96 96" class="svg-circle-progress" style="width: 96px; height: 96px;">
            <circle r="40" cx="48" cy="48" fill="none" stroke-miterlimit="20" stroke-width="10" class="svg-progress"
                style="stroke-dasharray: 275, 279.602;stroke:#eee;">
            </circle>
            <circle r="40" cx="48" cy="48" fill="none" stroke-miterlimit="20" stroke-width="10" class="svg-progress"
                :style="`stroke-dasharray: ${progressValue}, 279.602;stroke:${color};`">
            </circle>
        </svg>
        <div class="mask">
            {{ progress }}%
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch, defineProps } from 'vue'

const props = defineProps({
    progress: {
        type: Number,
        default: () => 20
    },
    color: {
        type: String,
        default: () => "#FFAFAF"
    },
    width: {
        type: String,
        default: () => "210px"
    },
    height: {
        type: String,
        default: () => "100px"
    },
})
const { height, width, color, progress } = toRefs(props)
const progressValue = ref((progress.value / 100) * 250)

watch(progress, (newValue) => {
    progressValue.value = (newValue / 100) * 250
})

</script>
<style lang="css" scoped>
.progress {
    background-color: #ffffff;
    display: inline-block;
    position: relative;
    height: 100px;
    text-align: center;
}

.svg-circle-progress {
    position: relative;
    transform: rotate(-90deg);
}

.svg-progress {
    stroke: #2196f3;
    stroke-linecap: round;
    transition: all .3s linear;
}

.mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
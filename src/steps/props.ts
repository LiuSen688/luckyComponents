
export const props2 = {
    stepsLabel: { // 步骤标题数组
        type: Array,
        default: ['Step 1', 'Step 2', 'Step 3', 'Step 4']
    },
    stepsDesc: { // 步骤描述数组
        type: Array,
        default: ['description 1', 'description 2', 'description 3', 'description 4']
    },
    totalSteps: { // 步骤总数
        type: Number,
        default: 4
    },
    currentStep: { // 当前选中的步骤
        type: Number,
        default: 1
    },
    totalWidth: { // 步骤条总宽度
        type: Number,
        default: 900
    },
    descMaxWidth: { // 描述文本最大宽度
        type: Number,
        default: 140
    }
}

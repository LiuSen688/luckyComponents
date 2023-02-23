export const props1 = {
    strokeHeight: {
        // 进度条高度
        // required:true,
        type: Number,
        default: 13
    },
    percentage: {
        // 进度条百分比
        type: Number,
        default: 0,
        required: true,
        validator: (val: number): boolean => val >= 0 && val <= 100,
    },
    status: {
        // 进度条状态：正常状态，成功状态，异常状态
        type: String,

    },
    ptype: {
        // 进度条样式：条形，还是圆形
        type: String,
        default: 'line',
        values: ['line', 'circle']
    },
    textInside: {
        // 文字是否內显
        type: Boolean,
        default: false,
    },
    pcolor: {
        // 进度条颜色
        type: String
    },
    cwidth: {
        // 环形进度条宽高
        type: Number,
        default: 126,
    }
}

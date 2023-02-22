export const skeletonProps = {
  animated: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 1,
  },
  rows: {
    type: Number,
    default: 3,
  },
  loading: {
    type: Boolean,
    default: true,
  },
  throttle: {
    type: Number,
  },
}

export const skeletonItemProps = {
  variant: {
    type: String,
    values: ['circle', 'h1', 'h3', 'text', 'p', 'image', 'button'],
    default: 'text',
  },
}

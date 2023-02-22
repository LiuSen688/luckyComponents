export const imageProps = {
  src: {
    type: String,
    default: '',
  },
  fit: {
    type: String,
    values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  referrerPolicy: {
    type: String,
    default: '',
  },
}

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
}

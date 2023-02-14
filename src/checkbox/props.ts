export const props = {
  modelValue: null,
  label: {
    type: [Number, String, Boolean],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
}

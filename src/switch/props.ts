export const props = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  activeColor: {
    type: String,
    default: '#66ccff',
  },
  inactiveColor: {
    type: String,
    default: '#dcdfe6',
  },
  activeText: {
    type: String,
  },
  inactiveText: {
    type: String,
  },
  activeIcon: {
    type: String,
  },
  inactiveIcon: {
    type: String,
  },
  inlinePrompt: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  width: {
    type: String,
  },
}

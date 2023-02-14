export default {
  logo: './logo.svg',
  useMobile: false,
  highlight: {
    style: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
  },
  pc: {
    header: {
      darkMode: null,
      i18n: null,
      playground: null,
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
        },
        doc: 'button',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Message 提示消息',
        },
        doc: 'message',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Loading 加载',
        },
        doc: 'loading',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Switch 开关',
        },
        doc: 'switch',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Radio 单选框',
        },
        doc: 'radio',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Checkbox 多选框',
        },
        doc: 'checkbox',
        type: 2,
      },
    ],
  },
}

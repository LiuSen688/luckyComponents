export default {
  logo: './logo.svg',
  useMobile: false,
  highlight: {
    "style": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
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
          'zh-CN': 'Breadcrumb 面包屑',
        },
        doc: 'breadcrumb',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Image 图片',
        },
        doc: 'image',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Skeleton 骨架屏',
        },
        doc: 'skeleton',
        type: 2,
      },
    ],
  }
}

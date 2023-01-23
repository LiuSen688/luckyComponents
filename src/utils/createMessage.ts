import { h, render } from 'vue'
import MyMessage from '../message/Message.vue'
// 限制提示栏的类型
export type MessageType = 'success' | 'error' | 'default' | 'warning'
// 定义函数，之后调用该函数就可以在需要显示提示栏的地方显示提示信息
const createMessage = (message: string, type?: MessageType, closeable?: boolean, timeout?: number) => {
  // 创建虚拟节点
  // 第一个参数 自定义Message组件 第二个参数 该组件需要的 prop 属性
  const messageVNode = h(MyMessage as any, {
    message,
    type,
    closeable
  })
  // 创建结点
  const mountNode = document.createElement('div')
  // 把结点添加到 DOM 树中
  document.body.appendChild(mountNode)
  // 使用 render 函数，将虚拟结点转换为真是结点并挂载到指定的 DOM 结点下
  render(messageVNode, mountNode)
  // 卸载组件
  const destroy = () => {
    render(null, mountNode)
    document.body.removeChild(mountNode)
  }
  if (timeout) {
    setTimeout(() => {
      destroy()
    }, timeout)
  }
}

export default createMessage

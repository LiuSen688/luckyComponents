// Component entry, the folder where the file exists will be exposed to the user
import Message from './Message.vue'
import type { App } from 'vue'

Message.install = function(app: App) {
  app.component(Message.name, Message)
}

export const _MessageComponent = Message

export default Message

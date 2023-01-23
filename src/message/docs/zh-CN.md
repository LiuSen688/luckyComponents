## 提示消息

### 基本使用

```vue
import BasicUse from '../example/BasicUse'
```

```html
<LuckyMessage v-if="isShow" :message="message" :type="type"></LuckyMessage>
```

### 可以关闭的提示

```vue
import CloseMessage from '../example/CloseMessage'
```

```html
<LuckyMessage v-if="isShow" :message="message" :type="type" closeable></LuckyMessage>
```

### 自定义提示内容

```vue
import SlotMessage from '../example/SlotMessage'
```

```html
<LuckyMessage v-if="isShow" :message="message" :type="type">
  <h4>Well done!</h4>
  <div>
    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
    you can see how spacing within an alert works with this kind of content.
  </div>
</LuckyMessage>

<LuckyButton class="btnMargin" type="primary" plain @click="handleMessage">点击展示</LuckyButton>

<script setup>
  const handleMessage = () => {
    type.value = 'default'
    isShow.value = true
    setTimeout(() => {
      isShow.value = false
    }, 1500)
  }
</script>
```

## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `type` | 提示消息主题色 | _string_ | `default` |
| `message` | 提示信息 | _string_ | `-` |
| `closeable` | 是否展示关闭按钮 | _boolean_ | `false` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 消息展示内容 | `-`  |

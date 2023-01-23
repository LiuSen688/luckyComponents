## 按钮

### 基本使用

```vue
import BasicUse from '../example/BasicUse'
```

```html
<LuckyButton type="primary">默认按钮</LuckyButton>
<LuckyButton type="success">成功按钮</LuckyButton>
<LuckyButton type="danger">错误按钮</LuckyButton>
<LuckyButton type="warning">警告按钮</LuckyButton>
<LuckyButton type="dark">黑白按钮</LuckyButton>
```

### 无背景色按钮

```vue
import PlainBtn from '../example/PlainBtn'
```

```html
<LuckyButton type="primary" plain>默认按钮</LuckyButton>
<LuckyButton type="success" plain>成功按钮</LuckyButton>
<LuckyButton type="danger" plain>错误按钮</LuckyButton>
<LuckyButton type="warning" plain>警告按钮</LuckyButton>
<LuckyButton type="dark" plain>黑白按钮</LuckyButton>
```

### 圆边按钮

```vue
import RoundBtn from '../example/RoundBtn'
```

```html
<LuckyButton type="primary" round>默认按钮</LuckyButton>
<LuckyButton type="success" round>成功按钮</LuckyButton>
<LuckyButton type="danger" round>错误按钮</LuckyButton>
<LuckyButton type="warning" round>警告按钮</LuckyButton>
<LuckyButton type="dark" round>黑白按钮</LuckyButton>
```

## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `type` | 按钮颜色 | _string_ | `primary` |
| `plain` | 有无背景色 | _boolean_ | `false` |
| `plain` | 是否圆角 | _boolean_ | `false` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |

## 按钮

### 基本使用

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
  <LucklyProgress :percentage="0" cwidth="20" />
  <LucklyProgress :percentage="40" pcolor="orange" cwidth="20" />
  <LucklyProgress :percentage="60" status="success" />
  <LucklyProgress :percentage="80" status="failure" />
```

### 图案内显

```vue
import AnilloUse from '../example/AnilloUse.vue'
```

```html
  <LucklyProgress :percentage="0" cwidth="20" />
  <LucklyProgress :percentage="40" pcolor="orange" cwidth="20" />
  <LucklyProgress :percentage="60" status="success" />
  <LucklyProgress :percentage="80" status="failure" />
```
### 环形进度条

```vue
import pro from '../example/pro.vue'
```

```html
  <pro :progress="40"></pro>
  <pro :progress="70" color="#00d4ff"></pro>
  <pro :progress="90" color="#ffc107"></pro>
```



## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `strokeHeight` | 进度条高度 | _number_ | `10` |
| `percentage` | 进度条百分比 | _number_ | `0` |
| `status` | 进度条状态：正常状态，成功状态，异常状态 | _string_ | `-` |
| `ptype` | 进度条样式：条形或圆形 | _string_ | `line` |
| `textInside` | 文字是否內显 | _boolean_ | `false` |
| `color` | 进度条颜色 | _string_ | `-` |
| `width` | 环形进度条宽高 | _number_ | `126` |



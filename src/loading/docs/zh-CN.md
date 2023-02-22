## 加载

### 区域遮罩

```vue
import PartLoading from '../example/PartLoading'
```

```html
<LuckyLoading>
    <div>
      <LuckyButton type="primary">默认按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="success">成功按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger">危险按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="warning">警告按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger">黑暗按钮</LuckyButton>
    </div>
<LuckyLoading>
```

### 增长式旋转器
```vue
import GrowLoading from '../example/GrowLoading'
```

```html
<LuckyLoading type="grow">
    <div>
      <LuckyButton type="primary" class="marBottom">默认按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="success" class="marBottom">成功按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">危险按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="warning" class="marBottom">警告按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">黑暗按钮</LuckyButton>
    </div>
  </LuckyLoading>
```

### 自定义加载中提示组件
```vue
import TipLoading from '../example/TipLoading'
```

```html
<LuckyLoading color="dark" background="rgba(52, 57, 63, 0.7)">
    <div>
      <LuckyButton type="primary" class="marBottom">默认按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="success" class="marBottom">成功按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">危险按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="warning" class="marBottom">警告按钮</LuckyButton>
    </div>
    <div>
      <LuckyButton type="danger" class="marBottom">黑暗按钮</LuckyButton>
    </div>

    <template #content>
      <h4>Loading</h4>
    </template>
  </LuckyLoading>
```

### 全局遮罩

```vue
import Loading from '../example/Loading'
```

```html
<LuckyLoading body :show="lightWrapper">
    <LuckyButton type="primary" @click="lightSwich">白天</LuckyButton>
</LuckyLoading>
<LuckyLoading body :show="darkWrapper" background="rgba(52, 57, 63, 0.7)" type="dark">
    <LuckyButton type="dark" @click="darkSwich">黑夜</LuckyButton>
</LuckyLoading>

<script setup lang="ts">
import LuckyLoading from '../index'
import LuckyButton from '../../button/Button.vue'

import { ref } from 'vue'

const lightWrapper = ref(false)
const darkWrapper = ref(false)

const lightSwich = () => {
  lightWrapper.value = true
  setTimeout(() => {
    lightWrapper.value = false
  }, 2000)
}
const darkSwich = () => {
  darkWrapper.value = true
  console.log(darkWrapper.value)

  setTimeout(() => {
    darkWrapper.value = false
  }, 2000)
}
</script>
```


## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `body` | 是否为全局遮罩 | _boolean_ | `false` |
| `show` | 是否展示遮罩 | _boolean_ | `true` |
| `background` | 遮罩的背景颜色 | _string_ | `无` |
| `type` | 加载中旋转器的类型 | _border_ _grow_ | `border` |
| `color` | 加载中旋转器的主题色 | _primary_ _success_ _secondary_ _danger_ _warning_ _info_ _light_ _dark_ | `info` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 区域遮罩覆盖的组件 | `-`  |
| `content` | 加载中提示组件 | `-`  |



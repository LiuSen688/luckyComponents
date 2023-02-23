## 步骤条

### 基本使用

```vue
import index from '../example/index.vue'
```

```html
  <LucklySteps :currentStep="1" :totalSteps="4" :totalWidth="900" :descMaxWidth="160" />
```
### 按钮步骤条

```vue
import  ClickUse from '../example/ClickUse.vue'
```

```html
    <LucklySteps ref="lichange" :totalWidth="900" :descMaxWidth="160" @change="onChange" />
    <button @click="clickson" class="button" type="primary">Next step</button>
```
## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `stepsLabel` | 步骤标题数组 | _array_ | `['Step 1', 'Step 2', 'Step 3', 'Step 4']` |
| `stepsDesc` | 步骤描述数组 | _array_ | ` ['description 1', 'description 2', 'description 3', 'description 4']` |
| `totalSteps` | 步骤总数 | _number_ | `4` |
| `currentStep` | 当前选中的步骤 | _number_ | `1` |
| `totalWidth` | 步骤条总宽度 | _number_ | `900` |
| `descMaxWidth` | 描述文本最大宽度 | _number_ | `140` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `clickson` | 点击按钮时触发 | ` ` |


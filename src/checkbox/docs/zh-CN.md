## 多选框

### 基本使用


`lucky-checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用 `v-model` 绑定 `Array` 类型的变量即可(不用`lucky-checkbox-group`包裹时，需要给多个checkbox用`v-model`绑定同一个`boolean`类型的变量)。 

只有一个选项时的需要用`v-model`绑定的变量的类型为 `Boolean`，当选中时值为`true`。 

`lucky-checkbox` 标签中的内容将成为复选框按钮之后的描述。

```vue
import Checkbox from '../example/Checkbox'
```

```html
<template>
  <LuckyCheckbox label="男" v-model="checkboxValue">男</LuckyCheckbox>
  <LuckyCheckbox label="女" v-model="checkboxValue">女</LuckyCheckbox>
</template>
```

### 禁用状态

多选框不可用状态。
设置 `disabled` 属性即可。

```vue
import DisabledCheckbox from '../example/DisabledCheckbox'
```

```html
<template>
  <LuckyCheckbox label="亭" v-model="checkboxValue" disabled>亭</LuckyCheckbox>
  <LuckyCheckbox label="子木" v-model="checkboxValue" disabled>子木</LuckyCheckbox>
</template>
```

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

给`lucky-checkbox-group`用`v-model`绑定一个`Array`类型的变量，在 `lucky-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 `checkbox` 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

```vue
import CheckboxGroup from '../example/CheckboxGroup'
```

```html
<template>
  <LuckyCheckboxGroup v-model="checkboxValue">
    <LuckyCheckbox label="spring">春</LuckyCheckbox>
    <LuckyCheckbox label="summer">夏</LuckyCheckbox>
    <LuckyCheckbox label="autumn" disabled>秋</LuckyCheckbox>
    <LuckyCheckbox label="winter" disabled>冬</LuckyCheckbox>
  </LuckyCheckboxGroup>
</template>
```

### 带有边框

```vue
import BorderCheckbox from '../example/BorderCheckbox'
```

```html
<template>
  <LuckyCheckboxGroup v-model="checkboxValue">
    <LuckyCheckbox label="spring" border>春</LuckyCheckbox>
    <LuckyCheckbox label="summer" border>夏</LuckyCheckbox>
    <LuckyCheckbox label="autumn" disabled border>秋</LuckyCheckbox>
    <LuckyCheckbox label="winter" disabled border>冬</LuckyCheckbox>
  </LuckyCheckboxGroup>
</template>
```

## API

### Checkbox 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `v-model / model-value` | 选中项绑定值 | _Array_ / _boolean_ | `-` |
| `label` | 多选框对应的值 | _string_ / _number_ / _boolean_| `-` |
| `name` | 原生 name 属性 | _string_ | `-` |
| `disabled` | 是否禁用多选框 | _boolean_ | `false` |
| `border` | 是否显示边框 | _boolean_ | `false` |

### Checkbox 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `change` | 绑定值改变时触发的事件 | `绑定值的新值` |

### Checkbox 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 多选框的自定义说明 | `-`  |

### CheckboxGroup 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `v-model / model-value` | 绑定值 | _Array_ / _boolean_ | `-` |
| `disabled` | 是否禁用所有多选框 | _boolean_ | `false` |

### CheckboxGroup 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `change` | 绑定值改变时触发的事件 | `绑定值的新值` |

### CheckboxGroup 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 自定义默认内容 | `-`  |
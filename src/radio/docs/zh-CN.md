## 单选框

### 基本使用

要使用 `Radio` 组件，只需要设置 `v-model` 绑定变量， 选中意味着变量的值为相应 `Radio label`属性的值， `label`可以是`String`、`Number` 或 `Boolean`。

```vue
import Radio from '../example/Radio'
```

```html
<template>
  <Lucky-radio label="Ting" v-model="radioValue">亭</Lucky-radio>
  <Lucky-radio label="ziMu" v-model="radioValue">子木</Lucky-radio>
</template>
```

### 禁用状态

```vue
import Disabled from '../example/DisabledRadio'
```

```html
<template>
  <Lucky-radio label="one" v-model="radioValue" disabled>option1</Lucky-radio>
  <Lucky-radio label="two" v-model="radioValue" disabled>option2</Lucky-radio>
</template>
```

### 单选框组

结合`lucky-radio-group`元素和子元素`lucky-radio`可以实现单选组， 为 `lucky-radio-group` 绑定 `v-model`，再为 每一个 `lucky-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

```vue
import RadioGroup from '../example/RadioGroup'
```

```html
<template>
  <LuckyRadioGroup v-model="radioValue" @change="fn">
    <LuckyRadio label="one">option1</LuckyRadio>
    <LuckyRadio label="two">option2</LuckyRadio>
    <LuckyRadio label="three">option3</LuckyRadio>
  </LuckyRadioGroup>
</template>
```

### 带有边框

```vue
import BorderRadio from '../example/BorderRadio'
```

```html
<template>
  <Lucky-radio label="LOVE" v-model="radioValue" border>春</Lucky-radio>
  <Lucky-radio label="MOVE" v-model="radioValue" border>秋</Lucky-radio>
</template>
```

## API

### Radio 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `v-model / model-value` | 选中项绑定值 | _string_ / _number_ / _boolean_ | `-` |
| `label` | 单选框对应的值 | _string_ / _number_ / _boolean_| `-` |
| `name` | 原生 name 属性 | _string_ | `-` |
| `disabled` | 是否禁用单选框 | _boolean_ | `false` |
| `border` | 是否显示边框 | _boolean_ | `false` |



### Radio 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `change` | 单选框被选中时触发 | `单选框的label值` |

### Radio 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 单选框的自定义说明 | `-`  |

### RadioGroup 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `v-model / model-value` | 绑定值 | _string_ / _number_ / _boolean_ | `-` |
| `disabled` | 是否禁用所有单选框 | _boolean_ | `false` |



### RadioGroup 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `change` | 绑定值变化时触发的事件 | `选中的 Radio label 值` |

### RadioGroup 插槽

| 插槽名    | 说明     | 子标签 |
| --------- | -------- | ---- |
| `default` | 自定义默认内容 | `Radio`  |
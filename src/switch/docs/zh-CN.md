## 开关

### 基本使用

绑定 `v-model` 到一个`boolean` 类型的变量。可以使用`active-color` 和 `inactive-color` 来设置开启时和关闭时开关的背景色

```vue
import BaseSwitch from '../example/BaseSwitch'
```

```html
<template>
  <Lucky-switch class="mr" v-model="value1"></Lucky-switch>
  <Lucky-switch class="mr" v-model="value2" active-color="green" inactive-color="red"></Lucky-switch>
</template>
```

### 尺寸

可以通过 `width` 设置开关的宽度

```vue
import WidthSwitch from '../example/WidthSwitch'
```

```html
<template>
  <div class="mb">
    <Lucky-switch v-model="value1" width="100px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value2" width="200px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value3" width="300px" active-text="open" inactive-text="close"></Lucky-switch>
  </div>
</template>

<style>
.mb {
  margin-bottom: 8px;
}
</style>

```

### 文字描述，自定义图标描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。使用 `inactive-icon` 和 `active-icon` 属性来添加图标。

```vue
import TextSwitch from '../example/TextSwitch'
```

```html
<template>
  <div class="mb">
    <Lucky-switch
      v-model="value1"
      active-text="木子"
      inactive-text="亭"
      active-color="green"
      inactive-color="yellow"
    ></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch v-model="value2" active-text="ziMu" inactive-text="wuLuo"></Lucky-switch>
  </div>
  <div class="mb">
    <Lucky-switch class="mr" v-model="value3" active-text="是" inactive-text="否" inline-prompt></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value4"
      active-text="Y"
      inactive-text="N"
      active-color="green"
      inactive-color="red"
      inline-prompt
    ></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value5"
      active-text="是是是是"
      inactive-text="对对对"
      inline-prompt
      width="40px"
    ></Lucky-switch>
    <Lucky-switch
      class="mr"
      v-model="value6"
      active-text="干净澄澈，真诚自然"
      inactive-text="无光"
      active-color="green"
      inactive-color="red"
      inline-prompt
    ></Lucky-switch>
  </div>
</template>

<style>
.mb {
  margin-bottom: 8px;
}
.mr {
  margin-right: 16px;
}
```

### 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```vue
import DisabledSwitch from '../example/DisabledSwitch'
```

```html
<template>
  <Lucky-switch class="mr" v-model="value1" disabled></Lucky-switch>
  <Lucky-switch class="mr" v-model="value2" active-color="green" inactive-color="red"></Lucky-switch>
</template>

<style>
.mr {
  margin-right: 15px;
}
</style>
```

## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `model-value / v-model` | 绑定值，必须为布尔值 | _boolean_ | `true` |
| `active-color` | 开关开启时的背景色 | _string_ | `-` |
| `inactive-color` | 开关关闭时的背景色 | _string_ | `-` |
| `active-text` | 开关开启时的文字描述 | _string_ | `-` |
| `inactive-text` | 开关关闭时的文字描述 | _string_ | `-` |
| `active-icon` | 开关开启时的字体图标描述 | _string_ | `-` |
| `inactive-icon` | 开关关闭时的字体图标描述 | _string_ | `-` |
| `inlinePrompt` | 控制文本或者字体图标是否显示在开关内。 | _boolean_ | `false` |
| `disabled` | 是否禁用 | _boolean_ | `false` |
| `name` | switch对应的name属性 | _string_ | `-` |
| `width` | 开关的宽长 | _string_ | `-` |








### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `change` | switch 状态发生变化时的回调函数 | `新状态的值` |
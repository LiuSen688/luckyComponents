## Menu 菜单
为网站提供导航功能的菜单。



## 基本使用

```vue
import BasicUse from '../example/BasicUse'
```


```html
<template>
  <LuckyMenu :defaultActive="'1'">
    <LuckyMenuItem :index="'1'"> 主页 </LuckyMenuItem>

    <LuckyMenuItem disabled>
      <a aria-current="page" href="#">项目1</a>
    </LuckyMenuItem>
    <LuckyMenuItem>
      <a aria-current="page" href="#" disabled>项目2</a>
    </LuckyMenuItem>
    <LuckySubMenu>
      <template #title>信息 </template>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息1</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息2</a>
      </LuckyMenuItem>

      <LuckyMenuItem>
        <a aria-current="page" href="#">信息3</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息4</a>
      </LuckyMenuItem>
    </LuckySubMenu>
  </LuckyMenu>

  <LuckyMenu :defaultActive="'1'" :backgroundColor="'rgba(182, 178, 178,0.5)'">
    <LuckyMenuItem :index="'1'"> 主页 </LuckyMenuItem>
    <LuckySubMenu>
      <template #title>信息 </template>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息1</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息2</a>
      </LuckyMenuItem>

      <LuckyMenuItem>
        <a aria-current="page" href="#">信息3</a>
      </LuckyMenuItem>
      <LuckyMenuItem>
        <a aria-current="page" href="#">信息4</a>
      </LuckyMenuItem>
    </LuckySubMenu>
  </LuckyMenu>
</template>

```


## Menu API

### Menu 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `default-active` | 	页面加载时默认激活菜单的 index | _string_ | `-` |
| `default-openeds` |	默认打开的 sub-menu 的 index 的数组| _Array_ | `-` |
| `menu-trigger` | 子菜单打开的触发方式,可选值 hover 与 click | _string_ | `hover` |
| `background-color` | 组件背景颜色	| _string_ | `white` |
| `disabled` | 是否禁用	| _boolean_ | `false` |



### Menu 方法

| 方法名    | 说明     | 类型 |
| --------- | -------- | ---- |
| `open` | 		展开指定的 sub-menu | `(index: string) => void`  |
| `close` | 		收起指定的 sub-menu | `(index: string) => void`  |


### Menu 事件

| 事件名    | 说明     | 类型 |
| --------- | -------- | ---- |
| `open` | 	sub-menu 展开的回调 | `(index: string) => void`  |



### Menu 插槽

| 插槽名    | 说明     |
| --------- | -------- | 
| `-` | 自定义默认内容 |



### SubMenu 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `disabled` | 是否禁用	| _boolean_ | `false` |
| `index` | 	唯一标识 | _string_ | `-` |
| `menu-trigger` | 子菜单打开的触发方式,可选值 hover 与 click | _string_ | `hover` |

### SubMenu 插槽

| 插槽名    | 说明     |
| --------- | -------- | 
| `title` | 自定义标题内容 |


### SubMenu 事件

| 事件名    | 说明     | 回调参数 |
| --------- | -------- | -------- |
| `click` | 	菜单点击时的回调函数 | 该组件实例 |



### MenuItem 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `disabled` | 是否禁用	| _boolean_ | `false` |
| `index` | 	唯一标识 | _string_ | `-` |
| `menu-trigger` | 子菜单打开的触发方式,可选值 hover 与 click | _string_ | `hover` |

### MenuItem 插槽

| 插槽名    | 说明     |
| --------- | -------- | 
| `title` | 自定义标题内容 |

### MenuItem 事件

| 事件名    | 说明     | 回调参数 |
| --------- | -------- | -------- |
| `click` | 	菜单点击时的回调函数 | 该组件实例 |
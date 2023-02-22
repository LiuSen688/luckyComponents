## Breadcrumb面包屑

显示当前页面的路径，快速返回之前的任意页面。  
  
<br/>
<br/>
<br/>



### 基本使用

在 lucky-breadcrumb 中使用 lucky-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。
<br/>
```vue
import BasicUse from '../example/BasicUse'
```

```html  
  <LuckyBreadcrumb separator="/">
    <LuckyBreadcrumbItem :to="{ path: '/' }">homepage</LuckyBreadcrumbItem>
    <LuckyBreadcrumbItem
      ><a href="/">promotion management</a></LuckyBreadcrumbItem
    >
    <LuckyBreadcrumbItem>promotion list</LuckyBreadcrumbItem>
    <LuckyBreadcrumbItem>promotion detail</LuckyBreadcrumbItem>
  </LuckyBreadcrumb>
```



## Breadcrumb API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `separator` | 分隔符 | _string_ | `/` |



### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 自定义默认内容 | `-`  |


## BreadcrumbItem API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `to` | 跳转目标，同vue-router的to属性 | _string_ | `/` |
| `replace` | 如果设置为true，跳转将不会留下历史记录 | _boolean_ | `false` |




### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 自定义默认内容 | `-`  |


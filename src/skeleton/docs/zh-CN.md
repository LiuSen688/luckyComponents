## Skeleton 骨架屏
在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

<br/>
<br/>
<br/>

### 基本使用
基础的骨架效果

```vue
import BasicUse from '../example/BasicUse'
```





```html  
<template>
  <LuckySkeleton />
  <br />
  <LuckySkeleton style="--lucky-skeleton-circle-size: 50px">
    <template #template>
      <Lucky-skeleton-item variant="circle" />
    </template>
  </LuckySkeleton>
</template>

```

### 更多参数
可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。

```vue
import MoreParams from '../example/MoreParams'
```

```html
<template>
    <LuckySkeleton :rows="5" />
</template>
```

### 动画效果
我们提供了一个开关标志，表明是否显示加载动画， 调用 animated ，所有的 LuckySkeleton 的子节点将显示动画。


```vue
import Animated from '../example/Animated'
```

```html
<template>
    <LuckySkeleton animated :rows="5" />
</template>
```

### 加载状态
当 Loading 结束之后，我们往往需要显示真实的 UI， 可以通过 loading 属性的值来控制是否显示加载后的 DOM。 也可以通过具名插槽 default 来构建 loading 结束之后需要展示的真实 DOM 元素结构。

```vue
import isLoading from '../example/isLoading'
```

```html
<script setup>
import LuckySkeleton from '../Skeleton.vue'
import LuckySkeletonItem from '../SkeletonItem.vue'
import LuckyButton from '../../button/Button.vue'
import {ref} from 'vue'
const isLoading = ref(true)
</script>

<template>
    <LuckyButton style="margin:15px;display: block;" @click="isLoading=!isLoading">切换加载状态</LuckyButton>
    <LuckySkeleton :rows="1" :loading="isLoading" >
        <template #default>
            当 Loading 结束之后，我们往往需要显示真实的 UI， 
            可以通过 loading 属性的值来控制是否显示加载后的 DOM。 也可以通过具名插槽 default 来构建 loading 结束之后需要展示的真实 DOM 元素结构。
        </template>
    </LuckySkeleton>
  </template>
```

### 防止渲染抖动
有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪， 此时为了避免这种情况，就需要通过 throttle 属性来避免这个问题。

```vue
import Throttle from '../example/Throttle'
```

```html
<script setup>
import LuckySkeleton from '../Skeleton.vue'
import LuckySkeletonItem from '../SkeletonItem.vue'
import LuckyButton from '../../button/Button.vue'
import {ref} from 'vue'
const isLoading = ref(true)
</script>

<template>
    <LuckyButton style="margin:15px;display: block;" @click="isLoading=!isLoading">切换加载状态</LuckyButton>
    <LuckySkeleton :rows="1" :loading="isLoading" :throttle="300">
        <template #default>
            当 Loading 结束之后，我们往往需要显示真实的 UI，
            可以通过 loading 属性的值来控制是否显示加载后的 DOM。 也可以通过具名插槽 default 来构建 loading 结束之后需要展示的真实 DOM 元素结构。
        </template>
    </LuckySkeleton>
  </template>
```


## Skeleton API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `animated` | 是否使用动画 | _boolean_ | `false` |
| `count` | 渲染多少个 template, 建议使用尽可能小的数字 | _number_ | `1` |
| `loading` | 是否显示加载结束后的 DOM 结构 | _boolean_ | `false` |
| `rows` | 骨架屏段落数量 | _number_ | `3` |
| `throttle` | 渲染延迟（以毫秒为单位） | _number_ | `0` |



### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 自定义默认内容 | `-` |
| `template` | 自定义渲染skeleton模板 | `-` |




## SkeletonItem API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `variant` | 当前渲染 skeleton 类型 | 	'p' , 'text' , 'h1' , 'h3' , 'caption' , 'button' , 'image' , 'circle' , 'rect' | `text` |






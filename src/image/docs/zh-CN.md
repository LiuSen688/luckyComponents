## Image 图片
图片容器，在保留所有原生 img 的特性下，支持自定义占位、加载失败等

<br/>
<br/>
<br/>

### 基本使用
可通过fit确定图片如何适应到容器框，同原生 object-fit。


```vue
import BasicUse from '../example/BasicUse'
```

```html  
<script setup>
import LuckyImage from '../Image.vue'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>
<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <LuckyImage style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>
<style scoped>
.demo-image{
      display: flex
}
.demo-image .block {
  padding: 30px 0;
  border-right: solid 1px rgba(128, 128, 128, 0.515);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20%;
  box-sizing: border-box;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: gray;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```
### 自定义占位
可通过slot = placeholder可自定义占位内容


```vue
import Placeholder from '../example/Placeholder'
```


```html
<template>
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration">Default</span>
        <LuckyImage :src="src" style="width: 100px; height: 100px" />
      </div>
      <div class="block">
        <span class="demonstration">Custom</span>
        <LuckyImage :src="src" style="width: 100px; height: 100px">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </LuckyImage>
      </div>
    </div>
  </template>

  <script lang="ts" setup>
import LuckyImage from '../Image.vue'
  const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  </script>
  
  <style scoped>
  .demo-image__placeholder{
    display: flex;
  }
  .demo-image__placeholder .block {
  padding: 30px 0;
  border-right: solid 1px rgba(128, 128, 128, 0.515);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
}
.demo-image__placeholder .block:last-child {
  border-right: none;
}
  .demo-image__placeholder .demonstration {
    display: block;
    color: rgb(143, 143, 143);
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
  }
  .demo-image__placeholder .lucky-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
  }
  .demo-image__placeholder.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: gray;
    color: rgb(143, 143, 143);
    font-size: 14px;
  }
  .demo-image__placeholder .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
  }
  </style>
```

### 加载失败
可通过slot = error可自定义加载失败内容


```vue
import Error from '../example/Error'
```


```html
<template>
    <div class="demo-image__error">
      <div class="block">
        <span class="demonstration">Default</span>
        <LuckyImage :src="src"  />
      </div>
      <div class="block">
        <span class="demonstration">Custom</span>
        <LuckyImage :src="src">
          <template #error>
            <div class="image-slot">不好意思加载失败了</div>
          </template>
        </LuckyImage>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
import LuckyImage from '../Image.vue'
  const src =
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpe'
  </script>
  
  <style scoped>
  .demo-image__error{
    display: flex;
  }
  .demo-image__error .block {
  padding: 30px 0;
  border-right: solid 1px rgba(128, 128, 128, 0.515);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
}
.demo-image__error .block:last-child {
  border-right: none;
}
  .demo-image__error .demonstration {
    display: block;
    color: rgb(143, 143, 143);
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
  }
  .demo-image__error .lucky-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
  }
  .demo-image__error .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: rgb(143, 143, 143);
    font-size: 14px;
  }
  .demo-image__error .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
  }
  </style>
  
```

## Image API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `src` | 图片源地址，同原生属性一致 | _string_ | `-` |
| `alt` | 原生属性 alt| _string_ | `-` |
| `referrer-policy` | 原生属性 referrerPolicy| _string_ | `-` |



### Image 事件

| 事件名    | 说明     | 类型 |
| --------- | -------- | ---- |
| `load` | 	图片加载成功触发 | `(e: Event) => void`  |
| `error` | 图片加载失败触发 | `(e: Error) => void`  |



### Image 插槽

| 插槽名    | 说明     |
| --------- | -------- | 
| `placeholder` | 当图像尚未加载时，自定义的占位符内容 |
| `error` | 自定义图像加载失败的内容 |


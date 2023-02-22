# 按钮

### 基本使用(单选)
```vue
import BasicUse from '../example/BasicUse'
```

```html
<template>
  <div>
    <LucklyUploader :limit=1 multiple type="file" :file-list="fileList" @get-files="handleGetFiles" @delete-files="deleteFiles"></LucklyUploader>
  </div>
</template>
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `limit` | 文件上传个数限制 | _number_ | `1` |
| `multiple` | 是否允许多选 | _boolean_ | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `delete-files` | 删除文件 | `event: Event` |

## 树形结构

### 基本使用

```vue
import index from '../example/index.vue'
```

```html
<luckly-tree></luckly-tree>
```

### 自定义数据

```vue
import moreUse from '../example/moreUse.vue'
```

```html
 <luckly-tree :menuList=menuList></luckly-tree>
```
## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `menuList` | 树状数据 | _array_ | `[{ title: '菜单1',children: [...]}]` |


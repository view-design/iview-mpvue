<p align="center">
    <a href="https://iview-mpvue.gitbook.io/iview-mpvue/">
        <img width="200" src="http://mpvue.com/assets/logo.png">
    </a>
</p>

# iView mpvue

### 一套高质量的小程序 UI 组件库

## 文档
[https://iview-mpvue.gitbook.io/iview-mpvue/](https://iview-mpvue.gitbook.io/iview-mpvue/)

## 体验
使用微信扫一扫体验小程序组件示例

<img width="200" src="https://github.com/iview/iview-mpvue/blob/master/assets/wechat-mina.jpg?raw=true">

## 快速上手
### 使用之前
在开始使用 iView Mpvue 之前，你需要先阅读 [Vue组件注册](https://cn.vuejs.org/v2/guide/components-registration.html) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/iview/iview-mpvue) 下载 iView Mpvue 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。按照Vue的自定义组件使用方式引入并注册：
```javasvript
import button from '../../dist/components/button/button'
<script>
    export default {
        components: {
            'i-button': button
        }
    }
</script>
```
2. 在 vue 中使用组件：
```html
<i-button type="primary" @click="handleClick">这是一个按钮</i-button>
```

### 预览所有组件
我们内置了所有组件的示例，您可以扫描上方的小程序码体验，或按以下方式在微信开发者工具中查看：

```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 的dist目录分别在对应的小程序工具中打开即可(微信、百度、头条、支付宝)。
## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, iView-mpvue
# 本目录用于实现React提供的功能，做出适当的demo，并使用该md做说明文档

# 说明：React官方为不同的用途提供了不同的[模板工程](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
* 单页应用 create-react-app
* 服务端渲染 Next.js
* 基于静态资源的web站 Gatsby
* 组件库或集成已有的代码库 More Flexible Toolchains

* CDN资源 [react](https://reactjs.org/docs/cdn-links.html)

## Toast组件，官方建议：能使用声明式组件，就不要使用ref开发接口

Avoid using refs for anything that can be done declaratively.

For example, instead of exposing open() and close() methods on a Dialog 

component, pass an isOpen prop to it.
## demo2
```
    关于props属性初始值得设置顺序(优先级依次升高，即2的值覆盖1的值，3的值覆盖2的值，最终展示3的值，且只render一次，除非有新的渲染)，

    1、 static defaultProps

    2、 每一个reducer中的默认state

    3、 createStore(reducers, preloadedState, enhancer)中的preloadedState，可以在此处从全局角度出发，考虑设计应用的state

```


## demo3
## demo4
## demo5
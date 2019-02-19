# 说明
* 关于history js库的源码阅读理解
* history version：v4.6.3
* date： 2-15 2019

# 正文

## history相关数据结构
* 通用数据结构
```
location = {
    pathname: string '/',
    search: string '',
    hash: string '',
    state: string undefined
}
```
* hashhistory 和 browserhistory
```
// history共暴露11个属性成员（函数）
history = {
    length: number,//
    action: string,//POP、PUSH、REPLACE
    location: object,
    createHref: func,
    push: func,
    go: func,
    goBack: func,
    goForward: func,
    block: func,//注册过渡弹框提示
    listen: func//注册监听函数
}
```
* memoryhistory
```
// history共暴露14个属性成员（函数）
history = {
    length: number,//
    action: string,//POP、PUSH、REPLACE
    location: object,
    createHref: func,
    push: func,
    go: func,
    goBack: func,
    goForward: func,
    block: func,//注册过渡弹框提示
    listen: func,//注册监听函数

    index: number,
    entries: array<location: object>,
    canGo: func
}
```

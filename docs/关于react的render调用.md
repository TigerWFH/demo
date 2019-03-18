# 关于react中如何触发render的调用？

```
结论：
    1、setState能够触发render的调用
    2、forceUpdate能够触发render的调用
    3、所谓的props改变，触发render的本质依然是setState的调用，即：props不会触发render的调用，但props是用来传输数据的
    4、this.props.children的特殊性，无法传递props属性
    5、JSX在谁的render中，谁负责re-render
```
`注：通过state改变状态并刷新UI，通过props传递更改的状态；父组件控制子组件的状态，在传递过程中，可以通过shoulcomponentupdate拦截更新`

# 关于react如何渲染更新UI

* [直接使用ReactDOM不断生成新DOM](https://reactjs.org/docs/rendering-elements.html)
```
React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
```
React元素是不可变的。一旦创建了React元素，元素的自元素和属性都是不可变。一个元素就像电影中独立的一帧：它代表的是某一时刻UI的状态。

截止到目前，我们更新UI的唯一办法就是不停的创建新元素，并用ReactDOM.render()函数重新生成DOM。

* [关于props](https://reactjs.org/docs/components-and-props.html)
```
Props are Read-Only

Whether you declare a component as a function or a class, it must never modify its own props.
```
props属性是只读的。

无论你是用function还是class声明组件，组件是不能修改自己的props属性的。

* [关于state](https://reactjs.org/docs/state-and-lifecycle.html)
```
State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components
```

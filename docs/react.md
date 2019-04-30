# 关于react的一些注意事项

# 一下经过demo测试
1. setState会进行一层shallowCompare，再决定是否更新
```
state = {
    monkey: {
        info: {
            age: 12,
            name: 'monkey
        }
    }
};

const {monkey} = this.state;
monkey.info.age = 18;
// 此次setState不会rerender，因为monkey的引用没有发生变化（但info中的age变了）
this.setState({
    monkey
});
```
2. setState第一个参数为null或{}之类，不会rerender
```
// 都不会rerender
this.setState(null);
this.setState((prevState, props) => {
    return null
});
this.setState({});
this.setState((prevState, props) => {
    return {}
});
```
3. shouldComponentUpdate即使返回false，setState依然会修改对应组件的state，就会有坑
```
shouldComponentUpdate() {
        console.log("this===>", this.state);
        return false;
}
this.setState((prevState, prevProps) => {
            return {monkey:null}
        }, () => {
            console.log("changedState===>", this.state.monkey);
});
// 连续两次点击会报错，因为即使scu返回false，但是state值仍然被setstate改变了，第一次对数据的引用就会出现问题
render() {
    return <div>
        <button onClick={this.onChangeAge}>更改年龄</button>
            <div>
                <span>姓名：</span>
                <span>
                    {this.state.monkey.info.name}
                </span>
        </div>
    </div>
}
```
/**
 * @title:       验证key属性对销毁重建组件的事实
 * @author:      Monkey
 * @email:       334080374@qq.com
 * @date:        2017-8-4
 * @modify Date: 
 * @conclusion:  1、当key值改变时，旧KeyDemo组件的DidMount和Unmount会被调用，
 *                  且创建的新KeyDemo组件的DidMount会被调用一次（控制台有输出信息），证明了旧组件的销毁和新组件的创建。
 *               2、KeyDemo初始化animal值为monkey，改变后变为cat；再改变key值，新渲染的KeyDemo组件的animal值为monkey，
 *                  间接的证明了key的改变，造成了原组件的销毁，新组件的创建（key的这个特性可以用来处理需要重置功能的业务场景）。
 * @ reference:  http://taobaofed.org/blog/2016/08/24/react-key/?utm_source=tuicool&utm_medium=referral
 */

//  libs
import * as React from 'react';

interface IProps {
    useList?: any;
    componentIndex: any;
}
interface IState {
    animal?: any;
}

let mockUserList = [
    {
        name: "monkey",
        age: 12
    },
    {
        name: "cat",
        age: 13
    },
    {
        name: "fish",
        age: 14
    }
];
class KeyDemo extends React.Component<IProps, IState>{
    static defaultProps = {
        useList: mockUserList,
    };
    constructor(props: IProps) {
        super(props);
        this.state = {
            animal: "monkey"
        };
    }
    componentDidMount() {
        console.log("DidMount---->I am Component" + this.props.componentIndex);
    }

    componentWillUnmount() {
        console.log("Unmount---->I am Component" + this.props.componentIndex);
    }
    _onClick = () => {
        this.setState({
            animal: "cat"
        });
    }

    render() {
        return (
            <div>
                <h1>测试key</h1>
                <button onClick={this._onClick}>
                    animal--->cat
                </button>
                <p>
                    {this.state.animal}
                </p>
            </div>
        )
    }
}

class KeyDemoContainer extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            demoKey: ["monkey"]
        };
    }

    _onClick = () => {
        this.setState({
            demoKey: ["cat"]
        });
    }

    render() {
        let demoKey = this.state.demoKey;
        return (
            <div>
                <button onClick={this._onClick}>改变key</button>
                {/* {
                    demoKey.length ? demoKey.map(item => <KeyDemo key={item}
                        componentIndex={item}></KeyDemo>) : null
                } */}
                <KeyDemo key={demoKey}
                    componentIndex={demoKey}>
                </KeyDemo>
            </div>
        )
    }
}

export { KeyDemoContainer };
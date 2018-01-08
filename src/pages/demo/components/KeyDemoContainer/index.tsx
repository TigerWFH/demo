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
    isTestList?: boolean;
}
interface IState {
    animal?: any;
}

let mockUserList = [
    {
        name: "lion",
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
let newUserList = [
    {
        name: "lion",
        age: 12
    },
    {
        name: "cat13",
        age: 13
    },
    {
        name: "fish",
        age: 15
    }
];
class KeyDemo extends React.Component<IProps, IState>{
    static defaultProps = {
        isTestList: true
    };
    constructor(props: IProps) {
        super(props);
        this.state = {
            animal: "monkey"
        };
    }
    componentDidMount() {
        console.log("DidMount---->I am Component " + this.props.componentIndex);
    }

    componentWillUnmount() {
        console.log("Unmount---->I am Component " + this.props.componentIndex);
    }
    _onClick = () => {
        this.setState({
            animal: "cat"
        });
    }

    render() {
        let isTestList = this.props.isTestList;
        return (
            <div>
                <div style={{ display: isTestList ? "none" : "block" }}>
                    <h1>测试key</h1>
                    <button onClick={this._onClick}>
                        animal--->cat
                    </button>
                    <p>
                        {this.state.animal}
                    </p>
                </div>
                <div style={{ display: isTestList ? "block" : "none" }}>
                    <p>
                        {this.props.children}
                    </p>
                </div>

            </div>
        )
    }
}

class KeyDemoContainer extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            demoKey: ["monkey"],
            userList: mockUserList
        };
    }

    _onClick = () => {
        this.setState({
            demoKey: ["cat"]
        });
    }

    _onChangeUserList = () => {
        this.setState({
            userList: newUserList
        });
    }
    _renderUserList = (userList) => {
        if (Array.isArray && Array.isArray(userList)) {
            return userList.map((value) => {
                return <KeyDemo componentIndex={value.name}
                    key={'key' + value.age}>
                    {value.name}
                </KeyDemo >
            })
        }
        return null;
    }

    render() {
        let demoKey = this.state.demoKey;
        let userList = this.state.userList;
        return (
            <div>
                <div style={{ border: "1px solid blue", marginBottom: "5px" }}>
                    <button onClick={this._onClick}>改变key</button>

                    <KeyDemo key={demoKey}
                        isTestList={false}
                        componentIndex={demoKey}>
                    </KeyDemo>
                </div>

                <div style={{ border: "1px solid red" }}>
                    <h1>测试list</h1>
                    <button onClick={this._onChangeUserList}>
                        改变userList
                    </button>
                    {userList.length && this._renderUserList(userList)}
                </div>
            </div>
        )
    }
}

export { KeyDemoContainer };
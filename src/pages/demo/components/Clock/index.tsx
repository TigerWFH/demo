/**
 * @title:       测试React UI刷新：setState, props, forceUpdate
 * @author:     Monkey
 * @email:      334080374@qq.com
 * @date:        
 * @modify Date: 2017-8-4
 */

// libs
import * as React from 'react';

function Clock(props: any) {
    return (
        <div>
            {props.time}
        </div>
    )
}

class Container extends React.Component<any, any>{
    timer: any;
    constructor(props: any) {
        super(props);
        this.state = {
            time: "0"
        };
    }

    componentDidMount() {
        let _time = 1;
        this.timer = setInterval(() => {
            this.setState({
                time: _time++
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <Clock time={this.state.time} />
            </div>
        )
    }
}

export { Clock, Container };
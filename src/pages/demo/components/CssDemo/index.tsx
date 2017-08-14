import * as React from 'react';
import "./index.less";

interface IProps { }
interface IState { }
class CssDemo extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>对文本的控制</h1>
                <div>
                    <span>
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                        我是span，不限定宽高，会自动换行适应文本的长度；
                    </span>
                    <div>
                        我是div，不限定宽高，会自动换行适应文本的长度；
                        我是div，不限定宽高，会自动换行适应文本的长度；
                        我是div，不限定宽高，会自动换行适应文本的长度；
                        我是div，不限定宽高，会自动换行适应文本的长度；
                    </div>
                </div>
            </div>
        )
    }
}

export { CssDemo };
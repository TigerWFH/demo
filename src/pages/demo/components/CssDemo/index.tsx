import * as React from 'react';
import "./index.less";

const demoIsHideMap = new Map([
    ["demo1", true],
    ["demo2", false],
    ["demo3", true],
    ["demo4", true],
    ["demo5", true],
]);
interface IProps { }
interface IState { }
class CssDemo extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{display: demoIsHideMap.get("demo1") && "none"}}>
                    <h1>对文本的控制</h1>
                    <div className="text-first">
                        <h3 style={{ textAlign: "center" }}>
                            不限定宽高，自动折行
                        </h3>
                        <span className="first-span">
                            我是span，不限定宽高，会自动换行适应文本的长度；
                            我是span，不限定宽高，会自动换行适应文本的长度；
                        </span>
                        <div className="first-div">
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                            我是div，不限定宽高，会自动换行适应文本的长度；
                        </div>
                    </div>
                    <div className="text-second">
                        <h3 style={{ textAlign: "center" }}>
                            限定宽高
                        </h3>
                        <span className="second-span">
                            inline元素，width无效，自动折行。
                            我是span，限定宽高，会自动换行适应文本的长度；
                            我是span，限定宽高，会自动换行适应文本的长度；
                        </span>
                        <div className="second-div second-div-1">
                            block元素，只限定宽度，自动撑满高度；
                            限定宽高，文本会溢出block元素。
                            overflow可以处理溢出内容。
                        </div>
                        <div className="second-div second-div-2">
                            block元素，只限定宽度，自动撑满高度；
                            限定宽高，文本会溢出block元素。
                            white-space控制是否折行,
                            overflow可以处理溢出内容。
                        </div>
                        <div className="second-div second-div-3">
                            text-overflow必须配合white-space和overflow使用。
                            white-space控制是否折行,
                            overflow可以处理溢出内容。
                        </div>
                
                    </div>
                </div>
                <div style={{ display: demoIsHideMap.get("demo2") && "none" }}>
                    demo2
                </div>
            </div>
        )
    }
}

export { CssDemo };
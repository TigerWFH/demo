import * as React from 'react';
import { IInfo, IFileInfo } from "../modals";

// 只有展示，没有交互的可以直接使用IInfo类型作为props类型
// 一、以继承的方式把数据拿过来，感觉太零碎
// interface IInfoProps extends IInfo {
// }
// 二、以对象的形式把数据拿过来，感觉比较合适;但是后台包逻辑
interface IInfoProps {
    infoData: IInfo;
}


export class Info extends React.Component<IInfoProps, never> {


    render() {
        let { infoData } = this.props
        return <div>
            info
        </div>
    }
}

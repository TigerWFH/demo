import * as React from 'react';
import './Slidebar.less';

interface ISlidebarProps {
    isShowSlidebar?: boolean;
}

interface ISlidebarState {
}

export class Slidebar extends React.Component<ISlidebarProps, ISlidebarState> {

    render() {
        let {isShowSlidebar} = this.props;
        return <div className={isShowSlidebar ? "slidebar" : "slidebar slidebar-hide"}>
            header
        </div>
    }
}
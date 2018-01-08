import * as React from 'react';
import './index.less';

interface ISlidebarProps {
    isShowSlidebar?: boolean;
}

interface ISlidebarState {
}

export class Slidebar extends React.Component<ISlidebarProps, ISlidebarState> {

    render() {
        let { isShowSlidebar, children } = this.props;
        return <div className={isShowSlidebar ? "slidebar" : "slidebar slidebar-hide"}>
            {children}
        </div>
    }
}
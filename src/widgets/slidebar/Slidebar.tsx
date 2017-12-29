import * as React from 'react';
import './Slidebar.less';

interface ISlidebarProps {
}

interface ISlidebarState {
    isShow?: boolean;
}

export class Slidebar extends React.Component<ISlidebarProps, ISlidebarState> {
    constructor(props:ISlidebarProps) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    render() {
        return <div className={"slidebar"}>
            header
        </div>
    }
}
import * as React from 'react';
import './index.less';


interface IHeaderProps {
    logo?: React.ReactNode;
    title?: string;
    buttonList?: React.ReactNode;
    onHideSlidebar?: ()=>void;
}

export class Header extends React.Component<IHeaderProps, never> {
    onClick = () => {
        let { onHideSlidebar} = this.props;
        onHideSlidebar && onHideSlidebar();
    } 
    render() {
        return <div className={"header"}>
            <span className={"logo"}>
                logo
                <button onClick={this.onClick}>
                    12313123
                </button>
            </span>
            <span className={"title"}>
                title
            </span>
            <span className={"buttons"}>
                buttons
            </span>
        </div>
    }
}
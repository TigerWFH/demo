import * as React from 'react';
import './index.less';


interface IHeaderProps {
    logo?: React.ReactNode;
    title?: string;
    buttonList?: React.ReactNode;
    onHideSlidebar?: () => void;
}

export class Header extends React.Component<IHeaderProps, never> {
    onClick = () => {
        let { onHideSlidebar } = this.props;
        onHideSlidebar && onHideSlidebar();
    }
    render() {
        let { title } = this.props;
        return <div className={"header"}>
            <span className={"logo"}>
                logo
            </span>
            <span className={"hide-slidebar"}
                onClick={this.onClick}>
            </span>
            <span className={"title"}>
                {title}
            </span>
            <span className={"buttons"}>
                buttons
            </span>
        </div>
    }
}
import * as React from 'react';
import './Header.less';


interface IHeaderProps {
    logo?: React.ReactNode;
    title?: string;
    buttonList?: React.ReactNode;
}

export class Header extends React.Component<{}, never> {
    render() {
        return <div className={"header"}>
            <span className={"logo"}>
                logo
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
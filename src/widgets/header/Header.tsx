import * as React from 'react';
import './Header.less';


interface IHeaderProps {
    logo?: React.ReactNode;
    title?: string;
    buttonList?: React.ReactNode;
    onHideSlidebar?: ()=>void;
}

export class Header extends React.Component<IHeaderProps, never> {
    onClick = () => {
        console.log(this.props);
        let { onHideSlidebar} = this.props;
        let elem = document.getElementById("main");
        elem.style.padding = "0";
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
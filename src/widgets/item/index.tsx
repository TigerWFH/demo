import * as React from "react";
import "./index.less";

interface IItemProps {
    title?: string;
    href?: string;
    onGetInfo?: (title: string, href?: string) => void;
}
interface IItemState { }

export class Item extends React.PureComponent<IItemProps, never> {
    static defaultProps = {
        title: "",
        href: ""
    };
    onClick = () => {
        let { title, href, onGetInfo } = this.props;
        if (typeof onGetInfo === "function") {
            onGetInfo(title);
        }
        window.location.href = href;
    }
    render() {
        let { title } = this.props;
        return <div className={"item"}
            onClick={this.onClick}>
            {title}
        </div>
    }
}
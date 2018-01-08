import * as React from "React";
import "./index.less";

interface IItemProps {
    title?: string;
    href?: string;
}
interface IItemState { }

export class Item extends React.PureComponent<IItemProps, never> {
    static defaultProps = {
        title: "",
        href: ""
    };
    onClick = () => {
        let { href } = this.props;
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
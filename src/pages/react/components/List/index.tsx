import * as React from 'react';

interface IListProps {
    data: any;
}
class ListItem extends React.Component<IListProps, {}> {
    constructor(props: IListProps) {
        super(props);
    }

    componentDidMount() {
        console.log("创建对象===》", this.props.data);
    }

    componentWillUnmount() {
        console.log("销毁对象===》", this.props.data);
    }

    render() {
        const { data = {} } = this.props;
        return (
            <div>
                <span>
                    名字：
                </span>
                 <span>
                     {
                         data.name
                     }
                 </span>
            </div>
        )
    }
}

export default ListItem;
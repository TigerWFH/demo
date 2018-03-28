import * as React from 'react';
import './index.less';

interface ICardProps {
    title?: string;
}
interface ICardState { }

class Card extends React.Component<ICardProps, never> {

    renderTitle(title: string) {
        if (title) {
            return null;
        }
        return <div>{title}</div>;
    }
    render() {
        let { title } = this.props;
        return (
            <div>
                {this.renderTitle(title)}
            </div>
        )
    }
}

export default Card;
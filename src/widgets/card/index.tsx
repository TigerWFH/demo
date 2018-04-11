import * as React from 'react';
import './index.less';

interface ICardProps {
	title?: string;
	content?: React.ReactNode;
}
interface ICardState {}

class Card extends React.Component<ICardProps, never> {
	renderTitle(title: string) {
		if (!title) {
			return null;
		}
		return <div>{title}</div>;
	}
	renderContent(content: React.ReactNode) {
		if (!content) {
			return null;
		}
		return <div>{content}</div>;
	}
	render() {
		let { title, content } = this.props;
		return (
			<div className={'cardRoot'}>
				{this.renderTitle(title)}
				{this.renderContent(content)}
			</div>
		);
	}
}

export default Card;

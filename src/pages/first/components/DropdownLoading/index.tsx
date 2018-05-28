/**
 * 移动端下拉刷新组件
 */

import * as React from 'react';
import './index.less';

interface DropdownLoadingProps {}
interface DropdownLoadingState {
	data: any[];
	content: any[];
}

class DropdownLoading extends React.PureComponent<DropdownLoadingProps, DropdownLoadingState> {
	list: any;
	wrapper: any;
	content: any;
	document: any;
	direction: string; /*取值： up,down*/
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			content: []
		};
	}
	onBodyTouchStart = () => {};
	onBodyTouchMove = (e) => {
		console.log('event=', e);
	};
	componentDidMount() {
		let mockData = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		let content = mockData.map((item, index) => {
			return (
				<div className={'dd-item'} key={`content-${index}`}>
					{item}
				</div>
			);
		});
		this.setState({
			content
		});
		this.document = window && window.document;
		document.body.addEventListener('touchmove', this.onBodyTouchMove);
	}

	componentWillUnmount() {
		if (this.document) {
			document.removeEventListener('touchmove', this.onBodyTouchMove);
			this.document = undefined;
		}
	}

	render() {
		let { content = [] } = this.state;
		return (
			<div
				className={'ddloading-root'}
				ref={(wrapper) => {
					this.wrapper = wrapper;
				}}
			>
				<div
					className={'ddloading-list-container'}
					ref={(list) => {
						this.list = list;
					}}
				>
					{content}
				</div>
				<div className={'dd-loading'}>"下拉刷新"</div>
			</div>
		);
	}
}

export default DropdownLoading;

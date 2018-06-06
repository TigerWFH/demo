/**
 * 移动端下拉刷新组件
 */

import * as React from 'react';
import './index.less';

interface DropdownLoadingProps {
	reachBottom?: () => any;
}
interface DropdownLoadingState {
	data: any[];
	content: any[];
}

class DropdownLoading extends React.PureComponent<DropdownLoadingProps, DropdownLoadingState> {
	documentDom: any;
	wrapperDom: any; /*可滚动容器*/
	portHeight: any; /*可视区域高度*/
	documentHeight: any; /*可滚动高度*/
	listDom: any; /*内容容器*/
	directionX: string; /*取值： left,right,nomove*/
	directionY: string; /*取值： up,down,nomove*/
	beginCoodinate: any; /*{x:0,y:0}*/
	endCoodinate: any; /*{x:0,y:0}*/
	static defaultProps = {
		reachBottom: null
	};
	constructor(props) {
		super(props);
		this.documentDom = window && window.document;
		this.state = {
			data: [],
			content: []
		};
	}
	onBodyTouchStart = (e) => {
		this.beginCoodinate = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		};
		if (this.wrapperDom) {
			this.portHeight = this.wrapperDom.clientHeight;
			this.documentHeight = this.wrapperDom.scrollHeight;
		}
	};
	onBodyTouchMove = (e) => {
		if (this.portHeight + this.wrapperDom.scrollTop === this.documentHeight) {
			this.reachBottom();
		}
	};
	onBodyTouchEnd = (e) => {
		this.endCoodinate = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		};
		if (this.endCoodinate.x - this.beginCoodinate.x > 10) {
			this.directionX = 'right';
		} else if (this.endCoodinate.x - this.beginCoodinate.x < -10) {
			this.directionX = 'left';
		} else {
			this.directionX = 'nomove';
		}
		if (this.endCoodinate.y - this.beginCoodinate.y > 10) {
			this.directionY = 'down';
		} else if (this.endCoodinate.y - this.beginCoodinate.y < -10) {
			this.directionY = 'up';
		} else {
			this.directionY = 'nomove';
		}
	};
	componentDidMount() {
		let mockData = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		let content = this.renderContent(mockData);
		this.setState({
			content
		});

		this.documentDom.body.addEventListener('touchstart', this.onBodyTouchStart);
		this.documentDom.body.addEventListener('touchmove', this.onBodyTouchMove);
		this.documentDom.body.addEventListener('touchend', this.onBodyTouchEnd);
	}

	renderContent = (data) => {
		return data.map((item, index) => {
			return (
				<div className={'dd-item'} key={`content-${index}-${Math.random()}`}>
					{item}
				</div>
			);
		});
	};

	componentWillUnmount() {
		if (this.documentDom) {
			this.documentDom.removeEventListener('touchstart', this.onBodyTouchStart);
			this.documentDom.removeEventListener('touchmove', this.onBodyTouchMove);
			this.documentDom.removeEventListener('touchend', this.onBodyTouchEnd);
			this.documentDom = undefined;
		}
	}

	reachBottom = () => {
		this.wrapperDom.scrollTop -= 1;
		// alert('到底了……');
		const self = this;
		setTimeout(() => {
			const { content } = self.state;
			const target = content.concat(self.renderContent([ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ]));
			self.setState(
				{
					content: target
				},
				() => {
					// self.wrapperDom.scrollTop = self.documentHeight;
					self.documentHeight = self.wrapperDom.scrollHeight;
				}
			);
		}, 1000);
		const { reachBottom } = this.props;
		if ('function' === typeof reachBottom) {
			reachBottom();
		}
	};

	render() {
		let { content = [] } = this.state;
		return (
			<div
				className={'ddloading-root'}
				ref={(wrapper) => {
					this.wrapperDom = wrapper;
				}}
			>
				<div
					className={'ddloading-list-container'}
					ref={(list) => {
						this.listDom = list;
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

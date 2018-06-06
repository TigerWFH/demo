/**
 * 移动端下拉刷新组件
 */

import * as React from 'react';
import './index.less';

interface DropdownLoadingProps {
	reachBottom?: (any) => any;
	content?: any[];
}

interface DropdownLoadingState {
	isShowLoading?: boolean;
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
	isLoading: boolean; /*是否已经触发触底函数*/
	static defaultProps = {
		reachBottom: null,
		content: null
	};
	constructor(props) {
		super(props);
		this.documentDom = window && window.document;
		this.state = {
			isShowLoading: false
		};
	}
	onBodyTouchStart = (e) => {
		this.beginCoodinate = {
			x: e.changedTouches[0].pageX,
			y: e.changedTouches[0].pageY
		};
		if (this.wrapperDom) {
			this.portHeight = this.wrapperDom.clientHeight;
			// this.documentHeight = this.wrapperDom.scrollHeight;
			this.documentHeight = this.listDom.scrollHeight;
		}
	};
	onBodyTouchMove = (e) => {
		// 防止重复请求
		if (this.isLoading) {
			return null;
		}
		// 实际内容并未占满一屏，不需要刷新
		if (this.portHeight > this.documentHeight) {
			return null;
		}
		if (this.portHeight + this.wrapperDom.scrollTop >= this.documentHeight - 44) {
			this.isLoading = true;
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
		this.documentDom.body.addEventListener('touchstart', this.onBodyTouchStart);
		this.documentDom.body.addEventListener('touchmove', this.onBodyTouchMove);
		this.documentDom.body.addEventListener('touchend', this.onBodyTouchEnd);
	}
	componentWillUnmount() {
		if (this.documentDom) {
			this.documentDom.removeEventListener('touchstart', this.onBodyTouchStart);
			this.documentDom.removeEventListener('touchmove', this.onBodyTouchMove);
			this.documentDom.removeEventListener('touchend', this.onBodyTouchEnd);
			this.documentDom = undefined;
		}
	}

	stopLoading = () => {
		this.setState(
			{
				isShowLoading: false
			},
			() => {
				this.isLoading = false;
			}
		);
	};

	reachBottom = () => {
		this.setState(
			{
				isShowLoading: true
			},
			() => {
				this.wrapperDom.scrollTop -= 1; /*解决触底时，再次move会二次触发加载问题*/
				const { reachBottom } = this.props;
				if ('function' === typeof reachBottom) {
					reachBottom(this.stopLoading);
				}
			}
		);
	};

	render() {
		const { content } = this.props;
		const { isShowLoading } = this.state;
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
					{content || this.props.children}
				</div>
				<div className={'dd-loading'} style={{ visibility: isShowLoading ? 'visible' : 'hidden' }}>
					"下拉刷新"
				</div>
			</div>
		);
	}
}

export default DropdownLoading;

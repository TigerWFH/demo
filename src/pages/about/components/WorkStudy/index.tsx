import * as React from 'react';
import './index.less';

import * as Chart from 'chart.js';

interface IWorkExperienceProps {
	onToNext?: Function;
}

interface IWorkExperienceState {
	index?: React.ReactText;
}

const LABELS = [ '平安好医生', '领壹金融', '云之轩', '大连民族大学', '安阳工学院' ];

const MAP_NAME_TO_COMPONENT = new Map([
['平安好医生', null],
['领壹金融', null],
['云之轩', null],
['大连民族大学', null],
['安阳工学院', null],
]);

class WorkExperience extends React.Component<IWorkExperienceProps, IWorkExperienceState> {
	context: any;
	pieChart: any;
	constructor(props: any) {
		super(props);
		this.state = {
			index: 0
		};
	}
	componentDidMount() {
		if (!this.context) {
			return null;
		}
		let ctx = this.context.getContext('2d');
		let mockData = {
			datasets: [
				{
					data: [ 8, 1, 1, 2, 4 ],
					backgroundColor: [ '#1E90FF', '#00A3FE', '#FF0000', '#FF6347', '#FFA500' ]
				}
			],
			labels: LABELS
		};
		let options: any = {
			type: 'pie',
			data: mockData,
			options: {
				// 统一的配置项
				// 响应式布局相关配置
				// responsive: true,
				// responsiveAnimationDuration: 20,
				// maintainAspectRatio: true,
				// onResize: ()=>{},
				// 图表标题
				title: {
					display: true,
					text: '主要的学习工作经历'
				},
				// 图表数据集概略图
				legend: {
					position: 'left',
					fullWidth: true,
					onClick: (e, item) => {
						const { text } = item;
						this.setIndex(text);
					},
					onHover: (e, item) => {
						if (e.target.style.cursor !== 'pointer') {
							e.target.style.cursor = 'pointer';
						}
					}
				},
				// hover: {
				// 	onHover: (e)=>{
				// 		console.log("=======", e);
				// 	}
				// },
				//
				tooltips: {
					// mode: 'index',
					callbacks: {
						title: (items, data) => {
							const { index = 0 } = items[0];
							this.setIndex(data.labels[index]);
							return data.labels[index];
						},
						label: (items, data) => {
							const { index = 0 } = items;
							const label = data.datasets[0].data[index] === 8 ? '至今' : data.datasets[0].data[index];
							return label;
						}
					}
				},
				// 动画
				animation: {},
				// 元素
				elements: {},
				// 布局
				layout: {}
				// 具体图表的配置项
			}
		};
		this.pieChart = new Chart(ctx, options);
	}
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
	};

	setIndex = (index) => {
		this.setState({
			index
		});
	};
	render() {
		return (
			<div className={'we-root'}>
				<div className={'we-container'}>
					<div className={'we-chart'}>
						<canvas
							ref={(context) => {
								this.context = context;
							}}
						/>
					</div>
					<div className={'we-content'}>内容展示:{this.state.index}</div>
				</div>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default WorkExperience;

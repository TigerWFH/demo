import * as React from 'react';
import './index.less';

import * as Chart from 'chart.js';
import InfoCard from '../InfoCard';

interface IWorkExperienceProps {
	onToNext?: Function;
}

interface IWorkExperienceState {
	index?: string;
}

const LABEL_LIST = [ '平安好医生', '领壹金融', '云之轩', '大连民族大学', '安阳工学院' ];
const MAP_NAME_TO_INFO = new Map([
	[ '平安好医生', { organization: '平安好医生', position: '前端开发工程师', duration: '2017-至今', job: '' } ],
	[ '领壹金融', { organization: '领壹金融', position: '前端开发工程师', duration: '2016-2017', job: '' } ],
	[ '云之轩', { organization: '云之轩', position: '桌面开发工程师&前端开发工程师', duration: '2015-2016', job: '' } ],
	[ '大连民族大学', { organization: '大连民族大学', position: '学生', duration: '2013-2015', job: '' } ],
	[ '安阳工学院', { organization: '安阳工学院', position: '学生', duration: '2009-2013', job: '' } ]
]);

class WorkExperience extends React.Component<IWorkExperienceProps, IWorkExperienceState> {
	context: any;
	pieChart: any;
	constructor(props: any) {
		super(props);
		this.state = {
			index: '平安好医生'
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
			labels: LABEL_LIST
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
					<div className={'we-content'}>
						<div>
							<span>总结：</span>
							<div>
								KJKLLKklsdklklsdgdsgmds;mg;sdgm;sd
							</div>
						</div>
						<InfoCard data={MAP_NAME_TO_INFO.get(this.state.index)} />
					</div>
				</div>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default WorkExperience;

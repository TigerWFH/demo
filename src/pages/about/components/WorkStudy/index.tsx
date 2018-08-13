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

const SUMMARY_LABEL = '总结：';
const SUMMARY =
	'独立调研过Cordova，angular,ionic等框架、库。独立调研了微信小程序开发的可行性并进行demo实验。同时进行了pc端和无线端项目开发。项目使用了react，react-router,redux等技术，并使用gulp,webpack,nodejs等相关的前端自动化开发工具。具有较强的独立学习能力。拥有4年的c/c++使用经验，了解http,socket等协议';

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
						<div className={'we-summary'}>
							<span className={'we-summary-label'}>{SUMMARY_LABEL}</span>
							<div className={'we-summary-content'}>{SUMMARY}</div>
						</div>
						<InfoCard data={MAP_NAME_TO_INFO.get(this.state.index)} />
					</div>
				</div>
			</div>
		);
	}
}

export default WorkExperience;

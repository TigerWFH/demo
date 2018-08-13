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
	'独立调研过Cordova，angular,ionic等框架、库。独立调研了微信小程序开发的可行性并进行demo实验。同时进行了pc端和无线端项目开发。\
	项目使用了react，react-router,redux等技术，并使用gulp,webpack,nodejs等相关的前端自动化开发工具。具有较强的独立学习能力。\
	拥有4年的c/c++使用经验，了解http,socket等协议';

const LABEL_LIST = [ '平安好医生', '领壹金融', '云之轩', '大连民族大学', '安阳工学院' ];
const MAP_NAME_TO_INFO = new Map([
	[ '平安好医生', { organization: '平安好医生', position: '前端开发工程师', duration: '2017-至今', job: '' } ],
	[
		'领壹金融',
		{
			organization: '领壹金融',
			position: '前端开发工程师',
			duration: '2016-2017',
			job:
				'应聘前端开发工程岗位，从angular转向react，第一次接触了webpack、gulp等前端自动化开发工具，并快速上手了nodejs。\
			在此期间，先后参与了trade work，broker work以及对应的微信小程序版本开发，充分学习了前端UI库react，并了解学习了其周边\
			react-router，react-redux，webpack等等，学习了前端组件化开发的思维，初步了解了数据驱动视图的概念。同时使用nodejs编写了\
			内部的使用的工具，体会到了前端自动化的一些优势和思路。延续了之前额独立学习和调研新技术的能力，并进行了部分总结：对于使用已经成\
			熟的技术，为了快速做出Demo，优先搜索中文资料，快速了解学习基本概念，并实现Demo，然后去查看官网文档；对于新技术（英语类较多，\
			所以英语阅读一定要过关），则直接去官网查看文档，学习并实践，掌握基本概念。'
		}
	],
	[
		'云之轩',
		{
			organization: '云之轩',
			position: '桌面开发工程师&无线端开发工程师',
			duration: '2015-2016',
			job:
				'最初应聘岗位是C++桌面开发工程师，开发类似百度云盘的定制化云盘，但随着公司战略调整，产品线去掉了PC端，我也随着公司的转变改变了方向，先后转向OC原生开发、\
			再到H5混合开发。在此过程中，我保持并继续了研究生期间的独立学习和调研能力，先后学习了OC原生语言开发，基于Cordova和angular的H5混合开发，并\
			给出Demo测试技术可行性。同时，我还学习了后台相关技术，包括tomcat集群搭建、restful风格的api设计等知识，顺便玩了一下mongodb'
		}
	],
	[
		'大连民族大学',
		{
			organization: '大连民族大学',
			position: '学生',
			duration: '2013-2015',
			job:
				'研究生2年，主要方向是图形图像识别方向，基于opencv的舌控鼠标系统，是我的毕业设计，也是对该方向的一次实践。\
			在做舌控鼠标系统的过程中，我先后独立调研了duilib UI库，微软的DirectShow和FFmpeg等音视频编解码库，虽然最终并没有\
			真正的应用到我的项目中，但培养了我独立学习和调研新（陌生）技术的能力，这是我目前为止get到的最有用的技能点。'
		}
	],
	[
		'安阳工学院',
		{
			organization: '安阳工学院',
			position: '学生',
			duration: '2009-2013',
			job:
				'大学四年，更多积累了计算机专业相关的基础知识：先后学习了《数据结构》、《计算机组成原理》、《计算机网络》、\
				《操作系统》、《通信原理》等基础课程，同时学习了《数据库系统概论》、《C语言程序设计》、《C++程序设计教程》\
				以及java、xml等其它语言类课程，最终的毕业设计是基于MFC和开源api的音乐播放器，主要工作点是UI部分'
		}
	]
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

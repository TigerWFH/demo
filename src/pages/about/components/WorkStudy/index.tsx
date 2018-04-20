import * as React from 'react';
import './index.less';

import * as Chart from 'chart.js';

interface IWorkExperienceProps {
	onToNext?: Function;
}

class WorkExperience extends React.Component<IWorkExperienceProps, never> {
	context: any;
	componentDidMount() {
		if (!this.context) {
			return null;
		}
		let ctx = this.context.getContext('2d');
		let mockData = {
			xLabels: [ 'javascript', 'http', 'c/c++', 'react&other', 'redux', 'webpack', 'rollup' ],
			yLabels: [ '精通', '掌握', '熟悉', '了解', '未知' ],
			datasets: [
				{
					label: '技能值',
					data: [ '掌握', '熟悉', '熟悉', '熟悉', '熟悉', '熟悉', '了解' ],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}
			]
		};
		let options: any = {
			type: 'line',
			data: mockData,
			options: {
				scales: {
					xAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: '技能种类'
							}
						}
					],
					yAxes: [
						{
							type: 'category',
							scaleLabel: {
								display: true,
								labelString: '熟练程度'
							},
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				title: {
					display: true,
					text: 'MonkeyWong的技能图谱'
				},
				animation: {
					duration: 5000
				}
			}
		};
		let lineChart = new Chart(ctx, options);
	}
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
	};
	render() {
		return (
			<div className={'weRoot'}>
				<div className={'container'}>
					<canvas
						ref={(context) => {
							this.context = context;
						}}
					/>
				</div>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default WorkExperience;

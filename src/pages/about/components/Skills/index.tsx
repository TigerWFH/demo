/*
抽象出数据:
1、编程语言：Javascript、Html、Css、C、C++、
2、常用库：React、Redux、React-router、mobx、chartjs
3、工程化工具：webpack，node，rollup、gulp
4、熟悉平台：window、ubuntu、mac
5、编程IDE：visual studio code
6、项目经历：toB的项目：broker work，CRM系统；保证金系统一期
			toC的项目：trader work、trader work mobile；plugin项目，fillorderout项目
7、自学能力：
8、其它：运维能力、photoshop、scheth
*/

import * as React from 'react';
import './index.less';
import * as Chart from 'chart.js';

interface ISkillsProps {
	onToNext?: Function;
}

class Skills extends React.Component<ISkillsProps, never> {
	context: any;

	componentDidMount() {
		if (!this.context) {
			return null;
		}
		let ctx = this.context.getContext('2d');
		let mockData = {
			labels: [ 'javascript', 'http', 'c/c++', 'react&other', 'redux', 'webpack', 'rollup' ],
			datasets: [
				{
					label: 'title of Votes',
					data: [ 3, 3, 6, 3, 3, 3 ],
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
				},
				{
					label: 'title of Votes',
					data: [ 3, 3, 6, 3, 3, 3 ],
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
			type: 'bar',
			data: mockData,
			options: {
				scales: {
					xAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: '时间（年）'
							}
						}
					],
					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: '技能'
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
			<div className={'skillsRoot'}>
				<canvas
					width="960"
					height="480"
					ref={(context) => {
						this.context = context;
					}}
				/>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default Skills;

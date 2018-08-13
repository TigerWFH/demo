import * as React from 'react';
import './index.less';

import * as Chart from 'chart.js';

interface IWorkExperienceProps {
	onToNext?: Function;
}

class WorkExperience extends React.Component<IWorkExperienceProps, never> {
	context: any;
	pieChart: any;
	componentDidMount() {
		if (!this.context) {
			return null;
		}
		let ctx = this.context.getContext('2d');
		let mockData = {
			datasets: [
				{
					data: [ 4, 2, 1, 1, 8 ],
					backgroundColor: {},
					label: '数据'
				}
			],
			labels: [ '安阳工学院', '大连民族大学', '云之轩', '领壹金融', '平安好医生' ]
		};
		let options: any = {
			type: 'pie',
			data: mockData,
			options: {}
		};
		this.pieChart = new Chart(ctx, options);
	}
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
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
					<div className={'we-content'}>内容展示</div>
				</div>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default WorkExperience;

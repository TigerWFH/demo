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
					data: [ 8, 1, 1, 2, 4 ],
					backgroundColor: [ '#1E90FF', '#00A3FE', '#FF0000', '#FF6347', '#FFA500' ]
				}
			],
			labels: [ '平安好医生', '领壹金融', '云之轩', '大连民族大学', '安阳工学院' ]
		};
		let options: any = {
			type: 'pie',
			data: mockData,
			options: {
				responsive: true
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

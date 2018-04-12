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
		let options: any = {
			type: 'bar',
			data: [],
			options: null
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
				<canvas width="960" height="480"
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

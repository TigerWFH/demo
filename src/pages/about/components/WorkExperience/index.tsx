import * as React from 'react';
import './index.less';

interface IWorkExperienceProps {
	onToNext?: Function;
}

class WorkExperience extends React.Component<IWorkExperienceProps, never> {
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
	};
	render() {
		return (
			<div className={'weRoot'}>
				WorkExperience
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default WorkExperience;

import * as React from 'react';
import './index.less';

interface ISkillsProps {
	onToNext?: Function;
}

class Skills extends React.Component<ISkillsProps, never> {
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
	};
	render() {
		return (
			<div className={'skillsRoot'}>
				Skills
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default Skills;

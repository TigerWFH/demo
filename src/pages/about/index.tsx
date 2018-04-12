import * as React from 'react';
import './index.less';

import Background from './components/Background';
import AnimationBg from './components/AnimationBg';
import Card from '../../widgets/card';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

class About extends React.Component {
	root: any;
	toNextPage = () => {
		let height = this.root.clientHeight;
		this.root.scrollTop += height;
	};

	render() {
		return (
			<div className={'resume'}
				ref={(root)=>{this.root = root;}}
			>
				<PersonalProfile onToNext={this.toNextPage} />
				<Skills />
				<WorkExperience onToNext={this.toNextPage} />
			</div>
		);
	}
}

export default About;

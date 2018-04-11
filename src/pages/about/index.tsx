import * as React from 'react';
import './index.less';

import Background from './components/Background';
import AnimationBg from './components/AnimationBg';
import Card from '../../widgets/card';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

class About extends React.Component {
	render() {
		return (
			<div className={'resume'}>
				<PersonalProfile />
				<WorkExperience />
				<Skills />
				<Card title={'基本信息'} />
			</div>
		);
	}
}

export default About;

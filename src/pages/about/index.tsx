import * as React from 'react';
import './index.less';

import Background from './components/Background';
import AnimationBg from './components/AnimationBg';
import Card from '../../widgets/card';

class About extends React.Component {
	render() {
		return (
			<div className={'resume'}>
				<Card title={'基本信息'}/>
			</div>
		);
	}
}

export default About;

import * as React from 'react';
import './index.less';

import Background from './components/Background';
import AnimationBg from './components/AnimationBg';
import Card from '../../widgets/card';
import PersonalProfile from './components/PersonalProfile';
import Skills from './components/Skills';
import WorkExperience from './components/WorkStudy';
import Footer from './components/Footer';

class About extends React.Component {
	root: any;
	toNextPage = () => {
		let height = this.root.clientHeight;
		this.root.scrollTop += height + 10;
	};

	render() {
		return (
			<div className={'resume'}
				ref={(root)=>{this.root = root;}}
			>
				<PersonalProfile onToNext={this.toNextPage} />
				<Skills onToNext={this.toNextPage}/>
				<WorkExperience  />
				<Footer />
			</div>
		);
	}
}

export default About;

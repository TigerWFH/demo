import * as React from 'react';
import './index.less';

interface IPersonalProfileProps {
	onToNext?: Function;
}

class PersonalProfile extends React.Component<IPersonalProfileProps, never> {
	onToNext = () => {
		let { onToNext } = this.props;
		if (typeof onToNext === 'function') {
			onToNext();
		}
	};

	render() {
		return (
			<div className={'ppRoot'}>
				<div className={'resume'}>
					<div>我是MonkeyWong</div>
				</div>
				<span className={'direction'} onClick={this.onToNext}>
					︾
				</span>
			</div>
		);
	}
}

export default PersonalProfile;

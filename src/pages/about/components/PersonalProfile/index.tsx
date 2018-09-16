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
			<div className={'pp-root'}>
				<div className={'pp-container'}>
					<div className={'pp-label'}>大家好,我是MonkeyWong</div>
					<div className={'pp-sublabel'}>目前居住在中国上海</div>
				</div>
				<div className={'pp-container'}>
					<div className={'pp-label'}>我是一名前端开发工程师</div>
					<div className={'pp-sublabel'}>目前工作在平安好医生</div>
				</div>
				<div className={'pp-container'}>
					<div className={'pp-label'}>
						C++使用了4年，做了自己的两个毕业设计
					</div>
					<div className={'pp-sublabel'}>
						虽然好久没有用C++了，但是依然注着它和它应用的领域
					</div>
				</div>
			</div>
		);
	}
}

export default PersonalProfile;

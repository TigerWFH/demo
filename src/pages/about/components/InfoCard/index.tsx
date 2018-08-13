import * as React from 'react';

import './index.less';

const ORGORGANIZATION = '公司/学校：';
const POSITION = '职位：';
const DURATION = '时间段：';
const JOB = '工作内容：';

interface IInfoCardData {
	organization?: string;
    position?: string;
    duration?: string;
	job?: string;
}

interface IInfoCardProps {
	data?: IInfoCardData;
}

class InfoCard extends React.Component<IInfoCardProps, never> {
	render() {
		const { data } = this.props;
		return (
			<div className={'ic-root'}>
				<div className={'ic-container'}>
					<span className={'ic-label'}>{ORGORGANIZATION}</span>
					<span className={'ic-data'}>{data.organization}</span>
				</div>
				<div className={'ic-container'}>
					<span className={'ic-label'}>{POSITION}</span>
					<span className={'ic-data'}>{data.position}</span>
				</div>
                <div className={'ic-container'}>
					<span className={'ic-label'}>{DURATION}</span>
					<span className={'ic-data'}>{data.duration}</span>
				</div>
				<div className={'ic-container'}>
					<span className={'ic-label'}>{JOB}</span>
					<span className={'ic-data'}>{data.job}</span>
				</div>
			</div>
		);
	}
}

export default InfoCard;

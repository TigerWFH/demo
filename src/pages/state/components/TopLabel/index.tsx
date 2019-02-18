import * as React from 'react';
import './index.less';

const LABEL_LIST = [ '平安质保', '正品低价', '假一赔十' ];
function TopLabel(props) {
	const { labelList = LABEL_LIST } = props;
	return (
		<div className={'toplabel-root'}>
			{labelList.map((item, index) => {
				return (
					<span className='toplabel-item' key={`toplabel-item-${index}`}>
						{item}
					</span>
				);
			})}
		</div>
	);
}

export default TopLabel;

import * as React from 'react';
import './index.less';

const ADDRESS_TIP = '请选择收货地址';
function Address(props) {
	const { tip = ADDRESS_TIP } = props;
	return <div className='address-root'>{tip}</div>;
}

export default Address;

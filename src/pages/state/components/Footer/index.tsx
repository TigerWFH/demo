import * as React from 'react';
import './index.less';

const TOTAL_TEXT = '总计：';
const BUTTON_TEXT = '确认药品';

function Footer(props) {
	const { total = 0 } = props;
	return (
		<div className='footer-root'>
			<div className='footer-price-container'>
				<span className='footer-price-label'>{TOTAL_TEXT}</span>
				<span className='footer-price'>{`￥${total}`}</span>
			</div>
			<button className='footer-button'>{BUTTON_TEXT}</button>
		</div>
	);
}

export default Footer;

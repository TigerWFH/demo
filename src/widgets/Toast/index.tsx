import * as React from 'react';
import * as ReactDom from 'react-dom';

import './index.less';

interface IToastProps {
	isShow: boolean;
	type?: string;
	text: string;
}

export class Toast extends React.PureComponent<IToastProps, never> {
	container: any = null;
	timer: any = null;
	constructor(props: IToastProps) {
		super(props);
		this.container = document.createElement('div');
		this.container.className = 'toast-container';
		document.body.appendChild(this.container);
	}

	componentWillUnmount() {
		if (null !== this.container) {
			document.body.removeChild(this.container);
			this.container = null;
		}
	}

	render() {
		const { isShow = false, type = 'info', text = '' } = this.props;

		return isShow ? ReactDom.createPortal(this.renderToast(type, text), this.container) : null;
	}

	renderToast = (type: string = 'info', text: string = '') => {
		return <div className={'toast-root ' + type}>{text}</div>;
	};
}

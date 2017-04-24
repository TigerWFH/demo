// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// utils
import { mergeString } from '../../../utils/utils';

// css
import './mask.less';

interface P {
	maskCN?: any;
	isShow?: false;
	content?: any;
}
interface S {
}

export class Mask extends React.Component<P, S>{
	static defaultProps = {
		content: <div className="mkContent">Loading...</div>,
		isShow: false
	};
	constructor(props: P) {
		super(props);
	}
	static mountMask = (options: any = {}) => {
		options.isShow = true;
		getInstance(options);
	};
	static unmountMask = (options: any = {}) => {
		ReactDOM.unmountComponentAtNode(container);
		instance = null;
	}
	render() {
		let _maskStyle = {
			display: this.props.isShow ? 'flex' : 'none'
		};
		let _maskCN = mergeString(this.props.maskCN, 'mkMask');
		return <div className={_maskCN} style={_maskStyle}>
			{this.props.content}
		</div>
	}
}

let container = null;
let instance = null;

function getInstance(options: any = {}) {
	if (!instance) {
		if (!container) {
			container = document.createElement('div');
			document.body.appendChild(container);
		}
		instance = ReactDOM.render(<Mask {...options} />, container);
	}

	return instance;
}
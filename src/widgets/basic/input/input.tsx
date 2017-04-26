// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './input.less';

interface P {
	rootCN?: string;
	rootStyle?: any;
	inputCN?: string;
	inputStyle?: any;
}
interface S { }
export class Input extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}
	render() {
		return <div className="mkRootInput">
			<input className="mkInput" />
		</div>
	}
}
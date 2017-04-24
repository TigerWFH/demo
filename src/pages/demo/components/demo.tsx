// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// component
import { Mask } from '../../../widgets/basic/mask/mask';

interface P { }
interface S { }

export class Demo extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}

	render() {
		return <div className="app">
			<button onClick={this._onMask}>Mask</button>
		</div>
	}
	_onMask = () => {
		Mask.mountMask();
		let timer = setTimeout(() => {
			Mask.unmountMask();
		}, 5000);
	}
}
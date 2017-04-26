// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// component
import { Mask } from '../../../widgets/basic/mask/mask';
import { Message } from '../../../widgets/basic/message/message';
import { Modal } from '../../../widgets/modal/modal';
import { Input } from '../../../widgets/basic/input/input';

interface P { }
interface S { }

export class Demo extends React.Component<P, S>{
	refs: any;
	constructor(props: P) {
		super(props);
	}

	render() {
		let _content = <input type="text" ref="input" />
		return <div className="app">
			<button onClick={this._onMask}>Mask</button>
			<button onClick={this._onModal}>Modal</button>
			<Input />
			<Message></Message>
			<Modal onOk={this._onOk}>
				{_content}
			</Modal>
		</div>
	}
	_onMask = () => {
		Mask.mountMask();
		let timer = setTimeout(() => {
			Mask.unmountMask();
		}, 5000);
	}
	_onModal = () => {
		Modal.mountModal();
	}
	_onOk = () => {
		let value = this.refs.input.value;
		console.log('value--->', value);
	}
}
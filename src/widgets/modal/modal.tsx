// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components
import { Mask } from '../basic/mask/';
// css
import './modal.less';

interface P {
	title?: any;
	content?: any;
	ok?: string;
	cancel?: string;
	onOk?: Function;
	onCancel?: Function;
}
interface S { }

export class Modal extends React.Component<P, S>{
	static content: any = "Modal";
	static defaultProps = {
		title: "monkey",
		ok: "确定",
		cancel: "取消"
	};
	constructor(props: P) {
		super(props);
		this._renderContent();
	}
	static mountModal() {
		let options = {
			content: Modal.content
		};
		Mask.mountMask(options);
	}
	static unmountModal() {
		Mask.unmountMask();
	}
	render() {
		return <Mask />
	}
	_renderContent = () => {
		let _content = <div className="mkModal">
			<div className="mkModalTitle">
				{this.props.title}
			</div>
			<div className="mkModalContent">
				{this.props.children || this.props.content}
			</div>
			<div className="mkModalFooter">
				<button className="" onClick={this._onOk}>
					{this.props.ok}
				</button>
				<button className="" onClick={this._onCancel}>
					{this.props.cancel}
				</button>
			</div>
		</div>;
		Modal.content = _content;
	}
	_onOk = () => {
		let { onOk } = this.props;
		if (onOk && typeof onOk === "function") {
			onOk();
		}
	}
	_onCancel = () => {
		let { onCancel } = this.props;
		if (onCancel && typeof onCancel === "function") {
			onCancel();
		}
		Modal.unmountModal();
	}
}
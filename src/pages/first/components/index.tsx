// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './index.less';
// import { css } from './index.less';//模块化引用
// import css = require('./index.less');//模块化引用
interface P {
	fetchAccountList?: Function;
	fetchAccount?: Function;
}
interface S { }

export class First extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}
	componentDidMount() {
		console.log('didMount-props--->', this.props);
	}
	componentDidUpdate() {
		console.log('didUpdate-props--->', this.props);
	}
	_onClickList = () => {
		let { fetchAccountList } = this.props;
		fetchAccountList();
	}
	_onClick = () => {
		let { fetchAccount } = this.props;
		fetchAccount();
	}
	render() {
		return (
			<div className="first wfh">
				<button onClick={this._onClickList}>accountList</button>
				<button onClick={this._onClick}>acount</button>
				first page
			</div>
		)
	}
}
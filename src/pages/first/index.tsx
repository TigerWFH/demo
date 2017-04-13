import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './index.less';
// import { css } from './index.less';//模块化引用
// import css = require('./index.less');//模块化引用
interface P { }
interface S { }

export class First extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}

	render() {
		return (
			<div className="first wfh">
				first page
			</div>
		)
	}
}
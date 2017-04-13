import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './index.less';
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
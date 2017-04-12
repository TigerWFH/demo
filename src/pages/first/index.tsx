import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P { }
interface S { }

export class First extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}

	render() {
		return (
			<div>
				first page
			</div>
		)
	}
}
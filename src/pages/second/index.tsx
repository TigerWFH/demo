import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P { }
interface S { }

class Second extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}

	render() {
		return (
			<div>
				second page
			</div>
		)
	}
}

export default Second;
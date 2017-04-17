// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P {
	testAction?: Function;
}
interface S { }

export class Second extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}
	componentDidMount() {
		console.log('didMount--->', this.props);
	}
	componentDidUpdate() {
		console.log('didUpdate--->', this.props);
	}
	_onClick = () => {
		let { testAction } = this.props;
		testAction();
	}
	render() {
		return (
			<div className="app">
				<button onClick={this._onClick}>button</button>
				<video src="../res/videos/bk.mp4"
					width="100%"
					autoPlay
					loop
					muted>
				</video>
			</div>
		)
	}
}
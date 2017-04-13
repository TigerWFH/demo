import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P { }
interface S { }

export class Second extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<video src="./res/videos/bk.mp4"
					width="100%"
					autoPlay
					loop
					muted></video>
			</div>
		)
	}
}
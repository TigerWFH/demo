// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './message.less';

interface P { }
interface S { }

export class Message extends React.Component<P, S>{
	constructor(props: P) {
		super(props);
	}
	render() {
		return <div className="message">
			I am a message box
		</div>
	}
}

let instance = null;
let container = null;

function getInstance() {
	if (container === null) {
	}
}
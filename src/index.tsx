import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	Router, Route,
	hashHistory,
	IndexRoute
} from 'react-router';

import './index.less';

class App extends React.Component<any, any>{
	render() {
		return <div className="wfh">
			App
			{this.props.children}
		</div>
	}
}

let elems = <Router history={hashHistory}>
	<Route path='/' component={App}></Route>
</Router>;

ReactDOM.render(elems, document.getElementById('main'));
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// router@3.0.0
import {
	Router, Route,
	hashHistory,
	IndexRoute
} from 'react-router';
// components
import First from './pages/first/index';
import Second from './pages/second/index';
import './index.less';

class App extends React.Component<any, any>{
	render() {
		return <div className="wfh">
			{this.props.children}
		</div>
	}
}
// router@3.0.0
let elems = <Router history={hashHistory}>
	<Route path='/' component={App}>
		<IndexRoute component={First}></IndexRoute>
		<Route path='first' component={First}></Route>
		<Route path='second' component={Second}></Route>
	</Route>
</Router>;

ReactDOM.render(elems, document.getElementById('main'));
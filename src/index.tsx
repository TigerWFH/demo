import * as React from 'react';
import * as ReactDOM from 'react-dom';
// router@3.0.0
// import {
// 	Router, Route,
// 	hashHistory,
// 	IndexRoute
// } from 'react-router';
// router@4.0.0
import { Route, HashRouter as Router, Link } from 'react-router-dom';
// components
import { First } from './pages/first/index';
import { Second } from './pages/second/index';
import './index.less';

class App extends React.Component<any, any>{
	render() {
		return <div className="wfh">
			{this.props.children}
		</div>
	}
}
// router@3.0.0
/*let elems = <Router history={hashHistory}>
	<Route path='/' component={App}>
		<IndexRoute component={First}></IndexRoute>
		<Route path='first' component={First}></Route>
		<Route path='second' component={Second}></Route>
	</Route>
</Router>;*/
// router@4.0.0
let elems = <Router>
	<div>
		{/*exact严格匹配，替换了原来的IndexRoute*/}
		<Route exact strict path="/" component={First}></Route>
		<Route path="/first" component={First}></Route>
		<Route path="/second" component={Second}></Route>
	</div>
</Router>

ReactDOM.render(elems, document.getElementById('main'));
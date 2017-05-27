// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';//服务端渲染

import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
// components
import Demo from './pages/demo/index';
import First from './pages/first/index';
import Second from './pages/second/index';
// store
import { store } from './store';
// import css = require('./index.less');
import './index.less';

const Test = function (props) {
	return <div>Test</div>
}
class App extends React.Component<any, any>{
	constructor(props: any) {//1-1
		super(props);
		// console.log('App----->constructor');
	}
	// componentWillMount() {//1-2
	// 	console.log('App----->componentWillMount');
	// }
	render() {//1-3 2-4
		// console.log('App--->render');
		return <div className="app">
			<Test></Test>
			{this.props.children}
		</div>
	}
	// componentDidMount() {//1-4
	// 	console.log('App----->componentDidMount');
	// }
	// componentWillReceiveProps(nextProps: any) {//2-1(父组件的更改)
	// 	console.log('App----->WillReceiveProps');
	// }
	// shouldComponentUpdate(nextProps: any, nextState: any) {//2-2(setState)
	// 	console.log('App----->shouldComponentUpdate');
	// 	return true;
	// }
	// componentWillUpdate(nextProps: any, nextState: any) {//2-3(forceUpdate)
	// 	console.log('App----->componentWillUpdate');

	// }
	// componentDidUpdate(preProps: any, preState: any) {
	// 	console.log('App----->componentDidUpdate');
	// }
	// componentWillUnmount() {//1-5
	// 	console.log('App----->componentWillUnmount');
	// }
}
let elems =
	<Provider store={store}>
		<Router>
			<App>
				{/*exact严格匹配，替换了原来的IndexRoute;也取消了嵌套(nested)*/}
				<Route exact strict path="/" component={Demo}></Route>
				<Route exact strict path="/first" component={First}></Route>
				<Route exact strict path="/second" component={Second}></Route>
				<Route exact strict path="/second/first" component={Second}></Route>
			</App>
		</Router>
	</Provider>


ReactDOM.render(elems, document.getElementById('main'));
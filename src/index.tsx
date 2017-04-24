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

class App extends React.Component<any, any>{
	render() {
		return <div className="app">
			{this.props.children}
		</div>
	}
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
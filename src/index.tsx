// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Link } from 'react-router-dom';

// components
import Demo from './pages/demo/index';
import First from './pages/first/first';
import Second from './pages/second/index';
import AlgorithmUI from './pages/algorithm/index';
import { Header, Slidebar, View, Item } from './widgets';
// store
import { store } from './store';

// css
// import css = require('./index.less');
import './index.less';

interface IAppProps {

}

interface IAppState {
	isShowSlidebar?: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
	state = {
		isShowSlidebar: true
	};
	onHideSlidebar = () => {
		this.setState({
			isShowSlidebar: !this.state.isShowSlidebar
		});
	}
	render() {
		let { isShowSlidebar } = this.state;
		return (
			<div className={isShowSlidebar ? "app" : "app app-show"}>
				<Header onHideSlidebar={this.onHideSlidebar} />
				<Slidebar isShowSlidebar={isShowSlidebar}>
					<Item title={"demo"} href={"/#/"}></Item>
					<Item title={"first"} href={"/#/first"}></Item>
					<Item title={"second"} href={"/#/second"}></Item>
					<Item title={"algorithm"} href={"/#/algorithm"}></Item>
				</Slidebar>
				<View>
					{this.props.children}
				</View>
			</div>
		)
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
				<Route exact strict path="/algorithm" component={AlgorithmUI}></Route>
				<Route exact strict path="/second/first" component={Second}></Route>
			</App>
		</Router>
	</Provider>


ReactDOM.render(elems, document.getElementById('main'), () => {
	console.log("app render browser finished");
});
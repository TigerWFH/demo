// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Link } from 'react-router-dom';

// components
import Demo from './pages/demo/';
import First from './pages/first/';
import DemoUI from './pages/ui/';
import AlgorithmUI from './pages/algorithm/';
import Payment from './pages/payment';
import FillOrder from './pages/fillorder';
import About from './pages/about';
import State from './pages/state';
import ReactPage from './pages/react';

import { Header, Slidebar, View, Item } from './widgets';
// store
import { store } from './store';
import './index.less';

interface IAppProps {}

interface IAppState {
	isShowSlidebar?: boolean;
	title?: string;
	onGetInfo?: (title: string) => void;
}

const HASH_MAP_TITLE = new Map([
	['#/', '个人经历'],
	['#/demo', '个人经历'],
	['#/first', 'first'],
	['#/ui', 'ui'],
	['#/algorithm', '算法'],
	['#/fillorder', 'fillorder'],
	['#/payment', 'payment'],
	['#/state', 'state'],
	['#/react', 'react']
]);

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		window.addEventListener('hashchange', this.getTitle);
		this.state = {
			isShowSlidebar: false,
			title: HASH_MAP_TITLE.get(location.hash),
			onGetInfo: (title) => {}
		};
	}

	getTitle = () => {
		let hash = location.hash

		this.setState({
			title: HASH_MAP_TITLE.get(hash)
		})
	}
	onHideSlidebar = () => {
		this.setState({
			isShowSlidebar: !this.state.isShowSlidebar
		});
	};
	onGetInfo = (title: string) => {
		this.setState({
			title
		});
	};
	render() {
		let { isShowSlidebar, title, onGetInfo } = this.state;
		return (
			<div className={isShowSlidebar ? 'app' : 'app app-show'}>
				<Header onHideSlidebar={this.onHideSlidebar} title={title} />
				<Slidebar isShowSlidebar={isShowSlidebar}>
					<Item title={'个人经历'} onGetInfo={this.onGetInfo} href={'/#/'} />
					<Item title={'demo'} onGetInfo={this.onGetInfo} href={'/#/demo'} />
					<Item title={'first'} onGetInfo={this.onGetInfo} href={'/#/first'} />
					<Item title={'antd and material-ui'} onGetInfo={this.onGetInfo} href={'/#/ui'} />
					<Item title={'算法'} onGetInfo={this.onGetInfo} href={'/#/algorithm'} />
					<Item title={'fillorder'} onGetInfo={this.onGetInfo} href={'/#/fillorder'} />
					<Item title={'payment'} onGetInfo={this.onGetInfo} href={'/#/payment'} />
					<Item title={'state'} onGetInfo={this.onGetInfo} href={'/#/state'} />
					<Item title={'reactPage'} onGetInfo={this.onGetInfo} href={'/#/react'} />
				</Slidebar>
				<View>{this.props.children}</View>
			</div>
		);
	}

	componentWillMount() {
		window.removeEventListener('hashchange', this.getTitle)
	}
}

let elems = (
	<Provider store={store}>
		<Router>
			<App>
				{/*exact严格匹配，替换了原来的IndexRoute;也取消了嵌套(nested)*/}
				<Route exact strict path="/" component={About} />
				<Route exact strict path="/demo" component={Demo} />
				<Route exact strict path="/first" component={First} />
				<Route exact strict path="/ui" component={DemoUI} />
				<Route exact strict path="/algorithm" component={AlgorithmUI} />
				<Route exact strict path="/fillorder" component={FillOrder} />
				<Route exact strict path="/payment" component={Payment} />
				<Route exact strict path="/state" component={State} />
				<Route exact strict path="/react" component={ReactPage} />
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(elems, document.getElementById('main'), () => {
	console.log('app render browser finished');
});

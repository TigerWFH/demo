// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { Route, Router, Link, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

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
import I18n from './pages/i18n';
import Css from './pages/css';

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
	[ '/', '个人经历' ],
	[ '/demo', '测试Demo' ],
	[ '/first', 'first' ],
	[ '/ui', 'ui' ],
	[ '/algorithm', '算法' ],
	[ '/fillorder', 'fillorder' ],
	[ '/payment', 'payment' ],
	[ '/state', 'state' ],
	[ '/react', 'react' ],
	[ '/css', 'css' ]
]);

const history = createHashHistory();
const unblock = history.block((location, state) => {
	// alert(JSON.stringify(location));
	// unblock();/*取消阻塞*/
});

class App extends React.Component<IAppProps, IAppState> {
	listener: any;
	constructor(props: IAppProps) {
		super(props);
		// window.addEventListener('hashchange', this.getTitle, false);
		this.listener = history.listen((location, action) => {
			console.log('history.location=', location);
			this.getTitle(location.pathname);
		});
		this.state = {
			isShowSlidebar: false,
			title: HASH_MAP_TITLE.get(history.location.pathname),
			onGetInfo: (title) => {}
		};
	}

	componentDidMount() {
		// 可以获取全局数据，放到state上
	}

	getTitle = (pathname) => {
		this.setState({
			title: HASH_MAP_TITLE.get(pathname)
		});
	};
	onHideSlidebar = () => {
		this.setState({
			isShowSlidebar: !this.state.isShowSlidebar
		});
	};

	render() {
		console.log("App---render");
		let { isShowSlidebar, title, onGetInfo } = this.state;
		return (
			<div className={isShowSlidebar ? 'app' : 'app app-show'}>
				<Header onHideSlidebar={this.onHideSlidebar} title={title} />
				<Slidebar isShowSlidebar={isShowSlidebar}>
					<Item title={'个人经历'} href={'/#/'} />
					<Item title={'demo'} href={'/#/demo'} />
					<Item title={'first'} href={'/#/first'} />
					<Item title={'antd and material-ui'} href={'/#/ui'} />
					<Item title={'al'} href={'/#/algorithm'} />
					<Item title={'fillorder'} href={'/#/fillorder'} />
					<Item title={'payment'} href={'/#/payment'} />
					<Item title={'state'} href={'/#/state'} />
					<Item title={'reactPage'} href={'/#/react'} />
					<Item title={'i18n'} href={'/#/i18n'} />
					<Item title={'css'} href={'/#/css'} />
				</Slidebar>
				<View>{this.props.children}</View>
			</div>
		);
	}

	componentWillUnMount() {
		// window.removeEventListener('hashchange', this.getTitle, false);
		console.log("wilunmount销毁");
		this.listener();
	}
}

let elems = (
	<Provider store={store}>
		<Router history={history}>
			<App>
				{/*exact严格匹配，替换了原来的IndexRoute;也取消了嵌套(nested)*/}
				<Switch>
					<Route exact strict path="/" component={About} />
					<Route exact strict path="/demo" component={Demo} />
					<Route exact strict path="/first" component={First} />
					<Route exact strict path="/ui" component={DemoUI} />
					<Route exact strict path="/algorithm" component={AlgorithmUI} />
					<Route exact strict path="/fillorder" component={FillOrder} />
					<Route exact strict path="/payment" component={Payment} />
					<Route exact strict path="/state" component={State} />
					<Route exact strict path="/react" component={ReactPage} />
					<Route exact strict path="/i18n" component={I18n} />
					<Route exact strict path="/css" component={Css} />
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(elems, document.getElementById('main'), () => {
	console.log('app render browser finished');
});

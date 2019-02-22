// libs
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import firstReducer from './pages/first/reducers';
import secondReducer  from './pages/ui/reducers';
import demo from './pages/demo/reducers';
import algorithm from './pages/algorithm/reducers';
import payment from './pages/payment/reducers';
import fillorder from './pages/fillorder/reducers';

let rootReducer = combineReducers({
	first: firstReducer,
	second: secondReducer,
	demo,
	algorithm,
	payment,
	fillorder
});

// 提前设计页面的数据结构，优先级高于单个reducer的默认值
// 此处是页面字段，页面下面设置api字段，设置对应api的状态
const preLoadedState = {
	algorithm: {/* 页面字段 */
		algorithm: {/* 对应api字段 */
			demo: {},
			code: "preLoadedState"
		}
	},
	demo: {},
	fillorder: {},
	first: {},
	payment: {},
	second: {}
};

export let store = createStore(rootReducer, preLoadedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
	console.log('store data--->', store.getState());
})


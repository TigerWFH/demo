// libs
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

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

let middlewares: Array<any> = [thunk];

if(process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    duration: true,
    logErrors: true,
    collapsed: true,
  })
  middlewares.push(logger);
}
// 提前设计页面的数据结构，优先级高于单个reducer的默认值
// 此处是页面字段，
// 页面下设置apiStatus字段，设置对应api的状态
// 页面下设置UI对应模块，完成对应UI模块所需数据
const preLoadedState = {
	algorithm: {/* 页面字段 */
		algorithm: {/* 对应api字段 */
			algorithm: "preLoadedState"
		},
		addressInfo: {},
		store: {},
		// promotion: {},
		apiStatus: {}/* 记录api请求状态，可用于防止重复请求等 */
	},
	demo: {},
	fillorder: {},
	first: {},
	payment: {},
	second: {}
};

export let store = createStore(rootReducer, preLoadedState, applyMiddleware(...middlewares));

store.subscribe(() => {
	console.log('store data--->', store.getState());
})


// libs
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import firstReducer from './pages/first/reducers';
import secondReducer  from './pages/second/reducers';
import demo from './pages/demo/reducers';
import algorithm from './pages/algorithm/reducers';

let rootReducer = combineReducers({
	first: firstReducer,
	second: secondReducer,
	demo,
	algorithm
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
	console.log('store data--->', store.getState());
})


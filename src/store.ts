// libs
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import { firstReducer } from './pages/first/reducers/index';
import { secondReducer } from './pages/second/reducers/index';

export let store = createStore(combineReducers(
	{
		first: firstReducer,
		second: secondReducer
	}
),
	applyMiddleware(thunkMiddleware));
store.subscribe(() => {
	console.log('store data--->', store.getState());
})


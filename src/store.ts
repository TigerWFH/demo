// libs
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import firstReducer from './pages/first/reducers';
import { secondReducer } from './pages/second/reducers/index';
import { reducer } from './pages/demo/reducers/index';

export let store = createStore(combineReducers(
	{
		first: firstReducer,
		second: secondReducer,
		demo: reducer
	}
),
	applyMiddleware(thunkMiddleware));
store.subscribe(() => {
	console.log('store data--->', store.getState());
})


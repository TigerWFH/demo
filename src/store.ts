// libs
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import { firstReducer } from './pages/first/reducers/index';

export let store = createStore(firstReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
	console.log('store data--->', store.getState());
})


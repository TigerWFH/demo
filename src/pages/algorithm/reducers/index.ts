import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const algorithm = (state = { status: 'PAGE_INITIAL' }, action) => {
	console.log("reducers===state===>", state);
	switch (action.type) {
		case t.FETCH_ALGORITHM:
			return {
				...state,
				...action.payload
			};
		case t.FETCH_ALGORITHM_FAIL:
			return {
				...state,
				...action.payload
			};
		case t.FETCH_ALGORITHM_SUCCESS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

const addressInfo = (state = {}, action) => {
	return state;
};

const store = (state = {}, action) => {
	return state;
}

const apiStatus = (state = {}, action) => {
	switch(action.type) {
		case t.FETCH_ALGORITHM:
			return {
				...state,
				algorithm: 'INITIAL'
			};
		case t.FETCH_ALGORITHM_FAIL:
			return {
				...state,
				algorithm: 'FAIL'
			};
		case t.FETCH_ALGORITHM_SUCCESS:
			return {
				...state,
				algorithm: 'SUCCESS'
			};
		case t.GET_RECIPE:
			return {
				...state,
				getRecipe: 'INITIAL'
			};
		case t.GET_RECIPE_SUCCESS:
			return {
				...state,
				getRecipe: 'SUCCESS'
			};
		case t.GET_RECIPE_FAIL:
			return {
				...state,
				getRecipe: 'FAIL'
			}
		default:
			return state;
	}
}

export default combineReducers({
	algorithm,
	addressInfo,
	store,
	apiStatus
});

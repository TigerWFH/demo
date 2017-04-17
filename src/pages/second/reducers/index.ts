// actions
import * as Actions from '../actions/index';

let initialState = {
	secondPage: 'second'
};
export let secondReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.BEGIN_AJAX:
			return { ...state, ...action.data };
		case Actions.TEST_SECOND:
			return { ...state, ...action.data };
		case Actions.ERROR_AJAX:
			return { ...state, ...action.data };
		default:
			return state;
	}
}
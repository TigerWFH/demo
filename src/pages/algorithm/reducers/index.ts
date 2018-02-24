import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

const algorithm = (state = {}, action) => {
    switch (action.type) {
        case t.FETCH_ALGORITHM:
            return {
                ...state,
                ...action.payload,
                status: 0
            };
        case t.FETCH_ALGORITHM_FAIL:
            return {
                ...state,
                ...action.payload,
                status: -1
            };
        case t.FETCH_ALGORITHM_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: 1
            };
        default:
            return state;
    }
}

export default combineReducers({
    algorithm
});
import { combineReducers } from 'redux';
import * as t from '../actions/actionTypes';

function goodsInfo(state = {}, action) {
    switch (action.type) {
        case t.GET_GOODS_INFO:
            return {
                ...state,
                status: 'INITIAL'
            };
        case t.GET_GOODS_INFO_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS'
            };
        case t.GET_GOODS_INFO_FAIL:
            return {
                ...state,
                status: 'FAIL'
            };
        default:
            return state;
    }
}

export default combineReducers({
    goodsInfo
});
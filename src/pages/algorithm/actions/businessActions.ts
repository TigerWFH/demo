import {bindActionCreators} from 'redux';
import * as t from './actionTypes';

export const fetchAlgorithm = (payload) => {
    return {
        type: t.FETCH_ALGORITHM,
        payload
    };
}

export const fetchAlgorithmSuccess = (payload) => {
    return {
        type: t.FETCH_ALGORITHM_SUCCESS,
        payload
    };
}

export const fetchAlgorithmFail = (payload) => {
    return {
        type: t.FETCH_ALGORITHM_FAIL,
        payload
    };
}
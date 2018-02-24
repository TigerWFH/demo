import * as business from './businessActions';

export const requestAlgorithm = () => {
    return (dispatch, getState) => {
        dispatch(business.fetchAlgorithm({}));
        let timer = setTimeout(() => {
            dispatch(business.fetchAlgorithmSuccess({}))
        }, 200);
    }
}
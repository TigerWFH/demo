import * as business from './businessActions';

export const requestDemo = () => {
    return (dispatch, getState) => {
        dispatch(business.fetchDemo({}));
        let timer = setTimeout(() => {
            dispatch(business.fetchDemoSuccess({}))
        }, 200);
    }
}
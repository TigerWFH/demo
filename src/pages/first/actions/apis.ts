import { get, post } from '../../../common/utils/http';
import * as m from '../modals/apiModals';
import * as business from './businessActions';

export const requestAccount = () => {
    return (dispatch, getState) => {
        dispatch(business.fetchAccount({}));
        const timer = setTimeout(() => {
            dispatch(business.fetchAccountSuccess({}))
        }, 300)
    }
}

export const requestAccountList = () => {
    
}
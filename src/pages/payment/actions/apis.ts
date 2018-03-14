import * as actions from './businessActions';
import { post, get } from '../../../common/utils/http';

export function requestMedicineCode(params) {
    return (dispatch, getState) => {
        let {flag} = params;
        if (flag) {
            delete params.flag;
        }
        else {
            dispatch(actions.getMedicineCode());
        }
        return post('/v1/medicinecode', {}).then((data: any) => {
            let { msgCode, msgText } = data;
            if (msgCode === 0 || msgCode === 250) {
                return dispatch(actions.getMedicineCodeSuccess(data));
            }
            else {
                return dispatch(actions.getMedicineCodeFail(data));
            }
        }, (error) => {
            return dispatch(actions.getMedicineCodeFail(error));
        });
    }
}
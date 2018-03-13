import * as actions from './businessActions';
import { post, get } from '../../../common/utils/http';

export function requestMedicineCode(params) {
    return (dispatch, getState) => {
        dispatch(actions.getMedicineCode());
        let timer = setTimeout(() => {
            let data = {
                code: 200,
                medicineCode: '8888'
            };
            return dispatch(actions.getMedicineCodeSuccess(data))
        }, 3000);
        // return post('', {}).then((data: any) => {
        //     let { code, message } = data;
        //     if (code === 200) {
        //         return dispatch(actions.getMedicineCodeSuccess(data));
        //     }
        //     else {
        //         return dispatch(actions.getMedicineCodeFail(data));
        //     }
        // }, (error) => {
        //     return dispatch(actions.getMedicineCodeFail(error));
        // });
    }
}
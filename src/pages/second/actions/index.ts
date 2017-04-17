// http
import { get, post } from '../../../utils/http';

export const BEGIN_AJAX = 'BEGIN_AJAX';
// export const END_AJAX = 'END_AJAX';
export const ERROR_AJAX = 'ERROR_AJAX';
export const TEST_SECOND = 'TEST_SECOND';

export let testAction = () => {
	let action = {
		type: BEGIN_AJAX,
		data: {
			isBeginAjax: true
		}
	};

	return (dispatch, getState) => {
		dispatch(action);
	}
}
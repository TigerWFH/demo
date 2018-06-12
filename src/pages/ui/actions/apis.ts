import * as actions from './businessActions';

export const requestSecond = () => {
	return (dispatch, getState) => {
		dispatch(actions.fetchSecond({}));
		const mockData = {
			index: 'I am index!',
			home: 'I am home'
		};
		dispatch(actions.fetchSecondSuccess(mockData));
	};
};

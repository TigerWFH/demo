import * as t from './actionTypes';
import { algorithm, getRecipe } from '../../apis';

const fetchAlgorithm = () => {
	return {
		type: t.FETCH_ALGORITHM
	};
};

const fetchAlgorithmSuccess = (payload) => {
	return {
		type: t.FETCH_ALGORITHM_SUCCESS,
		payload
	};
};

const fetchAlgorithmFail = (payload) => {
	return {
		type: t.FETCH_ALGORITHM_FAIL,
		payload
	};
};

export const requestAlgorithm = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchAlgorithm());
		algorithm(params)
			.then((data) => {
				dispatch(fetchAlgorithmSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchAlgorithmFail(error));
			});
	};
};

const fetchRecipe = () => {
	return {
		type: t.GET_RECIPE
	}
};

const fetchRecipeSuccess = (payload) => {
	return {
		type: t.GET_RECIPE_SUCCESS,
		payload
	}
};

const fetchRecipeFail = (error) => {
	return {
		type: t.GET_RECIPE,
		payload: error
	}
};

export const requestGetingRecipe = (params) => {
	return (dispatch, getState) => {
		dispatch(fetchRecipe())
		return getRecipe(params)
			.then((data) => {
				dispatch(fetchRecipeSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchRecipeFail(error));
			});
	}
}

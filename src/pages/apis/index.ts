import { get, post } from '../../common/utils/http';
// algorithm
export const algorithm = (params) => {
	return new Promise((resolve, reject) => {
		if (params) {
			resolve({
				algorithm: 'i am algorithm server data'
			});
		} else {
			reject({
				error: 'i am algorithm server response: error'
			});
		}
	});
};

// demo
export const demo = (params) => {
	return new Promise((resolve, reject) => {
		if (params) {
			resolve({
				demo: 'demo data'
			});
		} else {
			reject({
				error: 'demo error'
			});
		}
	});
}

// fillorder
export const goodsInfo = (params) => {
	return get('/v1/goods');
}

// first
export const account = (params) => {
	return get('/v1/account');
}

export const accountList = (params) => {
	return get('/v1/accountlist')
}

// payment
export const medicineCode = (params) => {
	return get('/v1/medicinecode');
}

// ui
export const second = (params) => {
	return get('/v1/second');
}
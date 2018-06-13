// algorithm
export const fetchAlgorithm = (params) => {
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

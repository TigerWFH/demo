/**
 * @description 获取url上的查询参数（包括hash上的查询参数）
 * @param {string} name 查询关键字
 * @param {string} url 查询url
 * 
 * @returns {string | undefined} 返回结果，查询不到返回undefined(因为JSON序列化会忽略值为undefined的字段，节省流量)
 */
export function getParamFromUrlByName(name: string, url?: string) {
	if (!url || !url.length) {
		url = window.location.href;
	}

	name = name.replace(/[\[\]]/g, '\\$&');
	// 只取第一个符合name的参数值
	const regexp = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
	const resultList = regexp.exec(url);
	let result = undefined;

	if (Array.isArray(resultList) && resultList[2]) {
		result = resultList[2];
	}

	return result;
}
/**
 * @description 根据url原始的location.search查询对应的参数
 * @param {string} name 查询关键字
 * 
 * @returns {string | undefined} 返回结果，查询不到返回undefined
 */ 
export function getParamFromSearchByName(name: string) {
	const search = window.location.search.slice(1);
	let result = undefined;
	if (search) {
		const regexp = new RegExp(`(^|&)${name}=(([^&]*)|&|$)`);
		const resultList = search.match(regexp);
		if (Array.isArray(resultList)) {
			result = resultList[2];
		}
	}

	return result;
}

export function mergeString(propName: string, origin: string) {
	let cn = origin;
	if (propName) {
		cn = propName + ' ' + origin;
	}

	return cn;
}

export function setClass(param: any) {
	let result: string = "";
	if (typeof param === "object") {
		let keyList = Object.keys(param);
		let length = keyList.length;
		let i = 0;
		while (i < length) {
			let target = param[keyList[i]] ? keyList[i] : "";
			result += target + " ";
		}
	}

	return result.replace(/\u0020$/, "");
}
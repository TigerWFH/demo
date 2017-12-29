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
export function mergeString(propName: string, origin: string) {
	let cn = origin;
	if (propName) {
		cn = propName + ' ' + origin;
	}

	return cn;
}
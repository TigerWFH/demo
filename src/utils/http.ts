function ajax(method, url, headers, data) {
	let _method = method;
	let _url = url;
	let _headers = headers || null;
	let _data = data || null;
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(_method, url);
		if (_headers !== null) {
			for (let key in _headers) {
				xhr.setRequestHeader(key, _headers[key]);
			}
		}
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					return resolve(xhr.responseText);
				}
				else {
					return reject(xhr.responseText);
				}
			}
		}
		if (_data !== null) {
			try {
				_data = JSON.stringify(_data);
			} catch (error) {

			}
		}
		xhr.send(_data);
	});
}

function parseResult(res: any = {}) {
	let o = {};
	try {
		o = JSON.parse(res);
		return Promise.resolve(o);
	} catch (error) {
		return Promise.reject(error);
	}
}

function catchError(error: any) {
	return Promise.reject(error);
}

function get(url: string, options: any = {}) {
	return ajax('GET', url, options.headers, null).then(parseResult, catchError);
}

function post(url: string, options: any = {}) {
	return ajax('POST', url, options.headers, options.data).then(parseResult, catchError);
}

export { post, get };
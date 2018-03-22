/*
返回对象结构
{
	status：'http通信状态(有时候业务直接反映出业务的处理结果；4XX是客户端问题；5XX是服务端问题)'
	payload: {
		msgCode: '业务处理结果代码',
		msgText: '业务处理结果描述',
		data: '业务处理结果'
	} || 'error info'
}
*/
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
			if (xhr.responseText) {
				if (xhr.readyState === 4) {
					let responseTarget = {
						status: xhr.status,
						payload: xhr.responseText
					};
					if (xhr.status >= 200 && xhr.status < 300) {
						responseTarget.payload = JSON.parse(xhr.responseText);
						return resolve(JSON.stringify(responseTarget));
					}
					else {
						return reject(JSON.stringify(responseTarget));
					}
				}
			}
		}
		// xhr.timeout = 30;
		// xhr.ontimeout = (event) => {
		// 	console.log("超时设置===>", event);
		// }
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

/**
 * @desc ajax 对put请求的Promise封装
 * @param url {string} 接口地址
 * @param options {object} http头设置，数据设置等其它可选参数
*/
export function get(url: string, options: any = {}) {
	return ajax('GET', url, options.headers, null).then(parseResult, catchError);
}

/**
 * @desc ajax 对post请求的Promise封装
 * @param url {string} 借口地址
 * @param options {object} http头设置，数据设置等其它可选参数
 */
export function post(url: string, options: any = {}) {
	return ajax('POST', url, options.headers, options.data).then(parseResult, catchError);
}
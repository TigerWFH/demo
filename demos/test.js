/*
	订阅/发布
*/

class Product {
	constructor() {
		this.clientList = [];
	}
	registry(client) {
		this.clientList.push(client);
	}
	notify(info) {
		this.clientList.forEach((elem) => {
			elem.receiveInfo(info);
		});
	}
}

class Client {
	constructor(name) {
		this.name = name;
	}
	receiveInfo(info) {
		console.log('info--->', info);
	}
}

let pro = new Product();
let c1 = new Client("monkey");
pro.registry(c1);
let c2 = new Client("cat");
pro.registry(c2);
pro.notify('二手东降价了');
/*
	生产者与消费者
*/

class Producer {
	constructor() {
		this.source = [];
	}
	myDispatch(type) {
		this.source.forEach((elem) => {
			if (elem.type === type) {
				elem.handler();
			}
		});
	}
	myRegistry(type, handler) {
		this.source.push({
			type: type,
			handler: handler
		});
	}
}
class Consumer {
	constructor(name) {
		this.name = name;
	}
	sayHello(producer) {
		producer.myDispatch('say');
	}
}

let p = new Producer();
let c3 = new Consumer("elephant");
p.myRegistry('say', () => {
	console.log('say hello');
});
c3.sayHello(p);


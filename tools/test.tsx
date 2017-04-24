class People {
	constructor(name: string = "monkey", age: number = 12) {
		this._name = name;
		this._age = age;
	}
	static ratio: number = 30;
	private _name: string;
	private _age: number;
	public getName() {
		People.ratio = 234234;
		return this._name;
	}
	static getRatio() {
		return People.ratio;
	}
}

let instance = new People();
console.log('name--->', instance.getName());
console.log('ratio--->', People.getRatio());
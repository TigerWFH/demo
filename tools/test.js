function Student(options = {}) {
	this.name = options.name || '';
	this.age = options.age || undefiend;
}
Student.prototype.sayHello = function () {
	console.log('hello');
};
Student.log = function () {
	console.log('studentLog--->');
};

let s = new Student({ name: "monkey", age: 12 });
s.sayHello();
s.__proto__.constructor.log();
console.log(s.__proto__ === Student.prototype);
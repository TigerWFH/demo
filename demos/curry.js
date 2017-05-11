// 题目如下
// fn()					--->0
// fn(2)()			--->2
// fn(2)(7)()		--->9
// fn(2)(7)(5)()--->14

// 答题前知识储备：
// 高阶函数定义：在数学（也称为算子、泛函）和计算机科学中，高阶函数是至少满足下列条件之一的函数：
// 						1、接受一个或多个函数作为输入
// 						2、输出一个函数
// 在函数式编程中，返回另一个函数的高阶函数被称为Curry化的函数。
// 柯里化：就是将一个多参数函数转变成单参数函数并实现多参数函数功能的过程。
// 这一转变，注定了函数需多次调用柯里化函数才能实现多参数函数的功能。
// js中函数柯里化：
// 							函数柯里化用于创建已经设置好了一个或多个参数的函数。

// 转变函数，会指定部分函数（bind函数就有该功能）
function curry(fn) {
	let _args = arguments;
	let args = Array.prototype.slice.call(_args, 1);
	return function () {
		let innerArgs = Array.prototype.slice.apply(arguments);
		let finalArgs = args.concat(innerArgs);
		if (arguments.length) {
			args = finalArgs;
			return arguments.callee;
		}
		// 此处需要重置外部函数传入
		args = Array.prototype.slice.call(_args, 1);
		return fn.apply(null, finalArgs);
	}
}
// 即将柯里化的函数
function add() {
	let _sum = 0;
	let _length = arguments.length;
	while (_length > 0) {
		_sum += arguments[--_length];
	}

	return _sum;
}

let myFn = curry(add);//创建了一个第一个参数为空的add()的柯里化版本
let myFn1 = curry(add, 100);//创建了第一个参数为100的add()柯里化版本
console.log(add(1));
console.log(myFn(1)());
console.log(myFn1(1)());

console.log(add(1, 2));
console.log(myFn(1)(2)());
console.log(myFn1(1)(2)());

console.log(add(1, 2, 5));
console.log(myFn(1)(2)(5)());
console.log(myFn1(1)(2)(5)());

console.log(add(1, 2, 5, 9));
console.log(myFn(1)(2)(5)(9)());
console.log(myFn1(1)(2)(5)(9)());
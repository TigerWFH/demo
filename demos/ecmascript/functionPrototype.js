// 原型第二集
// Function的原型(这些是函数对象具有的功能)
// propertise(1):
// function.prototype-->原型对象
// functions(6=3+1+2):
// 		function.prototype.apply(thisArg, [argsArray])   --->以argsArray作为参数调用thisArg对应的函数
// 		function.prototype.bind(thisArg[,arg1,arg2,...]):function --->以agrs为参数，返回thisArg对应函数的副本
// 		function.prototype.call(thisArg[,arg1,arg2,...]) --->同apply
// 		function.prototype.toString():string     --->以字符串形式，返回函数定义(改写)

// 		function.prototype.toSource():string       --->非标准
// 		function.prototype.isGenerator():boolean   --->非标准,判断函数是不是generator

function list() {
	// arguments是一个类数据
	// slice获取子数组
	// return Array.prototype.slice.call(arguments);//以数组形式返回参数[1,2,3]
	// return Array.prototype.slice.apply(arguments, [1, 2]);//以数组形式返回参数,[2]
	// return Array.prototype.slice.bind(arguments)(1, 2);//返回一个函数并调用[2]
	return Array.prototype.slice.bind(arguments, 1, 2)();//返回一个函数并调用[2]
}

var l1 = list(1, 2, 3);
console.log(l1);//call--->[1,2,3];apply--->[2]
console.log(list.apply(null, [1, 2, 3]));
console.log(Array.toString());
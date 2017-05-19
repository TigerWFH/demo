function add() {
	let l = arguments.length;
	let sum = 0;
	while (l > 0) {
		sum += arguments[--l];
	}

	// sum = Array.prototype.reduce.call(argements, function(pre,cur){
	// 	return pre + cur;
	// });

	return sum;
}

function curry(fn) {
	let argList = Array.prototype.slice.call(arguments, 1);
	return function () {
		let innerArgList = Array.prototype.slice.call(arguments);
		let finalArgList = argList.concat(innerArgList);
		return fn.apply(null, finalArgList);
	};
}

//f()=>0
// f(3)()=>3
// f(3)(5)()=>8
// f(3)(5)(9)()=>17
function curry1(fn) {
	let _args = arguments;
	let argList = Array.prototype.slice.call(_args, 1);
	return function () {
		let innerArgList = Array.prototype.slice.call(arguments);
		let finalArgList = argList.concat(innerArgList);
		if (innerArgList.length > 0) {
			argList = finalArgList;
			return arguments.callee;
		}

		argList = Array.prototype.slice.call(_args, 1);
		return fn.apply(null, finalArgList);
	}
}

// 柯里化可以提前把操作共同的部分埋进去柯里化函数中，而不用暴露出来
let curriedAdd = curry(add, 100);//100才体现了柯里化的作用,所有的求和都会算进该100参数
let curriedAdd2 = curry1(add);
// 1
console.log(curriedAdd());//0
console.log(curriedAdd(1, 2));//3
console.log(curriedAdd(1, 7, 9));//17
// 2
console.log(curriedAdd2());//0
console.log(curriedAdd2(1)());//1
console.log(curriedAdd2(1)(2)());//3
console.log(curriedAdd2(1)(2)(9)());//12
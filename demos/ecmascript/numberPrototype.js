// 原型对象 number.prototype
// properties():
// functions():
// --------------------改写继承的--------------
// 	function.prototype.toString():string
// 	function.prototype.toLocaleString():string
// 	function.prototype.valueOf()
// 	function.prototype.toSource()
// 	function.prototype.toExponential(count):string-->科学计算法方式中保留的小数位数
// 	function.prototype.toPrecision(count):string--->位数
// 	function.prototype.toFixed(count):string-->保留的小数位数

let num = 234.345;
console.log(num.toExponential(1));//2.3e+2
console.log(num.toFixed(2));//234.34
console.log(num.toPrecision(1));//2e+2
console.log(num.toPrecision(3));//234

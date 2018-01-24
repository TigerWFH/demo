// Number构造函数
// properties():
// 		Number.EPSILON--->
// 		Number.Max_SAFE_INTEGER--->
// 		Number.MAX_VALUE--->
// 		Number.MIN_SAFE_INTEGER--->
// 		Number.MIN_VALUE--->
// 		Number.NaN--->
// 		Number.NEGATIVE_INFINITY--->
// 		Number.POSITIVE_INFINITY--->
// 		Number.prototype--->
// functions():
//		Number.isNaN()
//		Number.isFinite()
//		Number.isInteger()
//		Number.isSafeInter()
//		Number.parseFloat()
//		Number.parseInt()

let num = "12.34";
let str = "123.123sad";
let str2 = "ss123.123sad";
console.log(Number.parseFloat(num));//12.34
console.log(Number.parseInt(num));//12
console.log(Number.parseFloat(str));//123.123
console.log(Number.parseFloat(str2));//NaN
console.log(Number.parseInt(str));//123
console.log(Number.parseInt(str2));//NaN
console.log(parseFloat(str));//123.123
console.log(parseFloat(str2));//NaN
console.log(parseInt(str));//123
console.log(parseInt(str2));//NaN
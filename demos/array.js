// 1、Array: ECMAScript数组是有序的数据列表。数据类型可以不同，数组大小动态调整。
// 2、创建数组：字面量、构造函数、Array.of()、Array.from()
// 3、property(2，this可继承，Array是静态)：
// 		Array.prototype: Array函数的原型对象
// 		Array.prototype[@@unscopables]：es6标准之前不能包含的属性名
// 		this.length
// 4、functions(5,静态函数)：
// 			Array():array
// 			Array[@@species]--->The Array[@@species] accessor property returns the Array constructor.
// 			Array.from(array-like || iterator[,mapFn,thisArg]):array --->根据参数，创建一个新数组实例(C++的深拷贝)
// 			Array.of(elem[,elem1,...]):array   --->将参数作为数组元素创建数组，修补Array构造函数的不确定行为
// 			Array.isArray(obj):boolean --->判断给定对象是不是数组

var arr = [1, 2];
var arr1 = new Array(3);//[,,]
var arr11 = Array.of(3);//[3]
var arr2 = new Array(1, 2);//[1,2]
var arr22 = Array.of(1, 2);//[1,2]
console.log(arr, arr1,arr11, arr2,arr22);
var arr3 = Array.from(arr);//就是个深拷贝
console.log(arr3);
console.log(Object.is(arr,arr3));
arr3[0] = 1243;
console.log(arr);
console.log(arr3);
var arr4 = Array.from('monkey');
console.log(arr4);
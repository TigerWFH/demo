// 1、引用类型：在ECMAScript中，---引用类型---是一种数据结构，用于将数据（属性）和功能（操作、方法）组织在一起，
// 					也被称为---对象定义---。创建引用类型的方法：创建一个构造函数
// 2、对象：   是某个引用类型的实例。创建对象的方式：字面量和(new 构造函数)
// 4、访问属性的方法有2中：点表示法和方括号表示法
// 5、属性：prototype、prototype.__proto__、prototype.constructor
// 6、功能（方法、操作 ,Object是静态方法，this是可继承方法 20）：
// 			Object.assign(target, ...sources):target

// 			Object.keys(obj):array    --->以数组形式返回给定对象自身所有可枚举属性（for...in会返回原型链上的）
//			Object.values(obj):array  --->以数组形式返回给定对象自身所有可枚举属性值（for...in会返回原型链上的）
// 			Object.entries(obj):array --->以数组形式返回给定对象自身可枚举的键值对（顺序同for...in）

//			Object.defineProperty(obj,prop,descriptor):obj
//			Object.defineProperties(obj,props):obj
// 			Object.getOwnPropertyDescriptor(obj,prop):any --->返回给定对象自身属性的描述{value,configurable,get,set,writable,enumerable}或者undefined
// 			Object.getOwnPropertyDescriptors(obj):any  --->返回给定对象自身所有属性的描述或{}
// 			Object.getOwnPropertyNames(obj):array --->返回指定对象上的所有string名字的数组（包括不可枚举的,不包括symbol属性）
// 			Object.getOwnPropertySymbols(obj):array --->返回指定对象上的所有symbol的数组
// 			Object.getPrototypeOf(obj):obj --->获取直接原型
// 			Object.setPrototypeOf(obj):obj --->设置直接原型
// 			Object.create(proto[,propertiesObject]):object  --->proto是新对象的原型，第二个参数和defineProperties参数一样
// 			Object.is(value1,value2):boolean    --->判断是否是同一个对象(两个对象即使属性值相同，也不是同一个)

//			Object.freeze(obj):object;   --->返回一个不可更改的对象（不能添加新属性，不能删除已有属性，不能修改属性以及属性的特性）
// 			Object.isFrozen(obj):boolean --->判断对象是否是不可更改的
// 			Object.seal(obj):object      --->与freeze的区别是，已存在属性的值可变
// 			Object.isSealed(obj):boolean --->判断对象是不是密封状态
// 			Object.preventExtensions(obj):obj --->不可添加新属性
// 			Object.isExtensible(obj):boolean --->判断对象是否可以添加新属性

// 创建构造函数:
function Person(options = {}) {
	this.name = options.name;
	this.age = options.age;
};
// 创建对象
var p = new Person({//构造函数创建对象
	name: "monkey",
	age: 12
});
var p01 = p;
var p0 = new Person({
	name: "monkey",
	age: 12
});
var pp = Object.create(Person.prototype, {
	name: {
		value: "monkey"
	},
	age: {
		value: 12
	}
});
var p1 = {//字面量创建对象,constructor是Object()
	name: "cat",
	age: 10
};
console.log(p);
console.log(p['name']);
console.log(pp.name);
let freeze = Object.freeze(p);
freeze.name = "123";//修改无效
console.log(freeze);
console.log(Object.isFrozen(freeze));
console.log(Object.is(p, p0));//false
console.log(Object.is(p, p01));//true
console.log(Object.getPrototypeOf(p));
console.log(Object.keys(p));
console.log(Object.values(p));
console.log(Object.getOwnPropertyNames(p));
console.log(Object.getOwnPropertySymbols(p));
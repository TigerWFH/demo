// 原型第一集
// js所有的函数对象都可以构建自己的原型，并且让自己的原型继承object.prototype或者直接继承object.prototype原型
// 比如说，Array有自己的原型，并且继承object.prototype,但是他和Object()构造函数无毛关系
// 根基：object.prototype
// properties（2）:
//	object.prototype.__proto__    ------>null
//	object.prototype.constructor  ------>Object()
// functions:（9=6+3.6种常见，3种非标准）
// 	object.prototype.hasOwnProperty(prop:string|symbol):boolean   --->判断obj自身（非继承）属性是否存在
// 	object.prototype.isPrototypeOf(obj:object):boolean --->判断给定的对象obj的原型链上是否有原对象
//	object.prototype.propertyIsEnumerable(prop):boolean --->判断给定的属性是否可枚举
//  object.prototype.toString():string
//  object.prototype.toLocaleString():string
//  object.prototype.valueOf()   --->返回指定对象的原始值（如何理解？）

// 	object.prototype.toSource():string  --->非标准函数，
// 	object.prototype.watch()            ---->非标准
// 	object.prototype.unwatch()					---->非标准
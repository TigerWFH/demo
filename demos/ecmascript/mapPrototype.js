// 说明：
// 			object和map
// 				在object中，只能把string和symbol作为key，且object有默认的键值对
// 				在Map中，可以把任何值(number,string,boolean,object,null,undefined,NaN,map,set,function...)作为key
// 				通过Map的size可以获取Map的长度
//			array和set区别：array可以有重复元素，set不能
// 原型对象   mapPrototype
// properties():
// 		map.prototype:
// 		map.prototype.size:
// 		map.prototype[@@toStringTag]
// 		get Map[@@species]:
// functions(10):
// 		map.prototype.forEach(callback[,thisArg])--->返回undefined
// 		map.prototype.clear():undefined//清楚所有的键值对
// 		map.prototype.delete(key):boolean--->删除对应的元素
// 		map.prototype.set(key,value):map--->添加元素
// 		map.prototype.get(key):value(undefined)--->检索元素
// 		map.prototype.has(key):boolean
// 		map.prototype.entries()--->返回一个map iterator对象,键值对
// 		map.prototype.keys()--->返回一个map iterator对象，键
// 		map.prototype.values()--->返回一个map iterator对象，值
// 		map.prototype[@@iterator]()--->同entries

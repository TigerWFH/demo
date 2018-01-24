// Reflect是一个内置单例对象,类似JSON，Math等
// Reflect提供一下静态函数，他们具有与代理处理程序方法相同的名称。
// Reflect.apply(target,thisArgument,argumentList)--->相当于function.prototype.apply
// Reflect.construct()--->对构造函数执行new操作，相当于new Target()
// Reflect.defineProperty(target, propertyKey, attributes):boolean--->属性是否定义成功
// Reflect.deleteProperty(target, propertyKey):boolean--->属性是否删除成功
// Reflect.getOwnPropertyDescriptor()--->返回描述符或undefined
// Reflect.getPrototypeOf(target)--->返回对象的原型或null
// Reflect.setPrototypeOf(target,prototype):boolean--->表明设置原型是否成功
// Reflect.isExtensible(target):boolean--->类似Object.isExtensible(),有区别
// Reflect.preventExtensions(target):boolean--->表明目标对象是否被成功设置为不可扩展

// Reflect.has(target,propertyKey):boolean--->同in操作符
// Reflect.get(target,propertyKey[,receiver]):any--->返回属性值
// Reflect.set(target,propertyKey,value[,receiver]):boolean--->表明设置属性是否成功
// Reflect.ownKeys(target):array--->返回一个由目标对象自身的属性键组成的数组
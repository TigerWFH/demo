// Function构造函数
// properties(6=3+2+1):这些属性是被实例（对象）共享的（有this，非静态）
// 		this.length  --->指定函数期望的参数个数,即函数命名参数个数
// 		this.name  --->函数的名字
// 		this.caller			--->非标准，调用当前函数的函数
// 		this.displayName --->非标准，函数的份额展示名（对人友好的）
// 		this.arguments（removed）--->传递给函数的参数
// functions(0):
// 		也没有this.fn(有this,非静态)
// 		没有通过Function.fn直接调用的函数，即没有静态函数（Object有，非继承的）

function say(name) { }
console.log(say.length);//1
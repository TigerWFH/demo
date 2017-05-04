// 结论：变量的声明不能覆盖函数的声明
// 			1、变量的声明，值为undefined
// 			2、函数的声明，值为函数定义
// ********************************
var tt;
function tt() {
	console.log(tt);
}
console.log(tt);//function
// 函数声明覆盖变量声明，输出结果是函数

var oo = "oo";
function oo() { };
console.log(oo);//oo
// 函数声明覆盖变量声明，之后执行赋值操作，tt被赋值改变，故输出字符串oo

function xx() { };
var xx;
console.log(xx);//function
// 变量声明不能覆盖函数声明（或者说两者取有效值，见开头的1和2），故输出是function
function yy() { };
var yy = "yy";
console.log(yy);//yy
// 函数声明(yy=自身定义)--->变量声明(undefined,是个无效值)--->执行赋值语句(yy="yy")--->console(yy)--->输出字符串
console.log(ll);//error,不使用var,变量不会提升，此时会出现error；使用var,结果为undefined
var ll = "ll";
console.log(ll);//ll

console.log(lsj);//function
var lsj = "lsj";
console.log(lsj);//lsj
function lsj() { };
console.log(lsj);//lsj

// 进入执行上下文和执行代码
// 进入执行上下文：就是声明提升的过程，变量声明并初始化为undeinfed，
// 								函数声明并初始化为函数定义本身（见开头1和2，形参的初始化就又一次进入新上下文的操作）
// 执行代码：代码的执行是基于变量和函数的初始化基础之上的

// 关于变量的：es5之前，使用var关键字是声明变量的唯一方式。
//            a=2;仅仅表示在全局对象上添加了一个名称为a的属性
// 						变量是不能够delete的，属性可以delete。(eval执行上下文中可以删除比变量)

// 关于this: this是执行上下文的一个属性
// 					this的值在进入执行上下文阶段就被确定了，并且在执行阶段是不能被改变的
// 		全局代码中的this：指向全局对象本身
// 		函数代码中的this：是动态变化的。
// 											首相，在一般的函数调用中，this的值是由激活上下文代码的调用者决定的。
//												this的值是由×××调用表达式×××决定的。调用表达式即调用函数的方式。
//		内部引用类型（the reference type）:base,propertyName---------警告：要区别js类型中的引用类型，两者不一样
//                内部引用操作符会自动转化涉及到的标识符，即变量名、函数名、参数名等，(理解为你后续能调用的东西吧)
// 	结论：函数上下文中this的值是函数调用者提供并且由当前调用表达式的形式决定的。如果在调用括号()
// 				的左边，是内部引用类型的值，不是经过getValue返回的实际值，那么this的值就会设置为该内部引用
// 				类型值的base对象。
// 				所有其他情况下，即非内部引用类型条件下，this的值总是null。然而，null对this来说没有意义，
//        因此会隐式转换为全局对象。
// 				(function(){})();--->(function(){})是一个函数对象，但不是应用类型（因为他既不是标识符也不是属性访问）
// 													感觉有点奇葩圆括号()可以理解为组运算符

// case：
(function () {//此处组运算返回的不是Reference引用是函数对象
	console.log('--->1', this);//null--->global
})();
var foo = {
	bar: function () {
		console.log('--->', this)
	}
};

foo.bar();//Reference, --->foo
(foo.bar)();//Reference, --->foo(组运算符,组运算符为触发getValue,中间过程获得的仍然是引用类型)
(foo.bar = foo.bar)();//not Reference--->global(此处的=触发了getValue,返回的是一个函数对象了，不再是Reference)
(false || foo.bar)();//not Reference--->global(||操作符作用同赋值操作符)
(foo.bar, foo.bar)();//not Reference--->global(,操作符作用同赋值操作符)

// 特例：--------------------------------------活跃对象总是会返回this值为——null
// 此时，l的reference中的base是t，t是一个活动对象（lexcal environment）,那么this就成了null，转化为global
function t() {
	function l() {
		console.log("*********", this);//global
	}
	l();
}
t();
//
var foo1 = {
	bar: function () {
		console.log('wrapper--->', this);//foo1
		function t() {
			console.log("inner--->", this);//global
		}
		t();
	}
};
foo1.bar();
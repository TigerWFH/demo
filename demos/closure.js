// 闭包概念

/**
 * 在ECMAScript中，函数时第一级对象。这个术语意味着，函数可以作为参数传递给其它函数或者作为其它函数的返回值。这样的参数称为 
 * “函数类型参数”（funarg，即functional arguments）。接受函数作为参数或者返回一个函数的函数，叫做“高阶函数”，贴近数学一些
 * 叫做“高阶操作符”。
 * 函数类型参数和函数类型值的使用，会产生一些与之相关的问题，成为funarg问题，为了解决该问题，引入了闭包的概念。
 * funarg问题1:
 *      当父函数运行结束时，子函数如何访问父函数的局部变量。子函数被创建的时候（静态作用域）会保存父函数的作用域链，所以当函数
 *      被调用的时候，它上下文的作用域链会被格式化成活动对象与[[scope]]属性的和。请看示例1。创建时刻绑定，这样的作用域称为“静态作用域”。
 *      ECMAScript使用的是静态作用域，故示例1输出是10，而不是20.
 * funarg问题2:
 *      这种情况下可能会存在一个父上下文，但是在解析标志符的时候可能会模糊不清。问题是：标识符该使用哪个作用域的值，以静态的方式存储在
 *      函数 创建时刻 的还是在执行过程中以动态方式生成的。为了解决这个问题，采用了静态作用域。请看示例2.
 * 总结：静态作用域是一门语言拥有闭包的必需条件。但是一些语言可能会同时提供静态作用域和动态作用域。但是ECMAScript只使用了静态作用域，
 *      所以结论是：ECMAScript完全支持闭包，技术上是通过函数的[[scope]]属性实现的。
 *      闭包的确切定义：
 *          闭包是一个代码块（在ECMAScript是一个函数）和以静态方式／词法方式进行存储所有父作用域的一个集合体。所以，通过这些存储的
 *          作用域，函数可以很容易找到自由变量。理论上来讲，ECMAScript中所有的函数都是闭包。
 * 当以父函数有多个闭包时，任意闭包对自由变量的修改，都会影响到其它闭包。示例3。
 */ 
// 示例1
function foo1(){
    var x = 10;
    return function (){
        console.log(x);
    };
}

var returnedFunc = foo1();
var x = 20;
returnedFunc();//10,but not 20
// 示例2
var y = 10;
function foo2(){
    console.log(y);
}

(function(funarg){
    var y = 20;
    funarg();
})(foo2);//10,but not 20

// 示例3
function foo3(){
    var z = 10;
    function r1(){
        z += 1;
        console.log(z);
    }
    function r2(){
        console.log(z);
    }

    return [r1, r2];   
}

var r = foo3();
r[1]();//10
r[0]();//11
r[1]();//11

/**
 * 对JS中This的认识
 * this是一个与执行上下文相关的特殊对象。因此，它可以叫作上下文对象（也就是用来指明 执行上下文是哪个上下文中被触发的 对象）。
 * 注意：this是执行上下文的一个属性，而不是变量对象的一个属性。
 * this的值在进入执行上下文阶段就确定了，并且在执行代码阶段是不能改变的。
 * 注意：在一般的函数调用中，this的值是由激活上下文代码的调用者决定的。this的值是由 调用表达式 的形式（即调用函数的方式）决定的。
 *      
 * 引用类型：关于this的确定，内部需要引入一个引用类型，一个伪对象，包含base和propertyName属性。
 * 
 */ 

function foo4(){
    console.log(this);
}

// foo4();//global//等价于window.foo4();
foo4.prototype.constructor();//foo4.prototype
var bar = {
    bar: foo4
};
bar.bar();//bar
(bar.bar)();//bar,()是一个组操作符
// (bar.bar = bar.bar)();//global
// (bar.bar,bar.bar)();//global
// (false || bar.bar)();//global
// var otherFoo = bar.bar;
// otherFoo();//global
var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDay());//这是星期几（0---星期天））
console.log(date.getDate());//这是几号
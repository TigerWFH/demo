console.log("string--->", Object.prototype.toString.call('monkey'));//[object String]
console.log("number--->", Object.prototype.toString.call(123));//[object Number]
console.log("boolean--->", Object.prototype.toString.call(true));//[object Boolean]
console.log("undefined--->", Object.prototype.toString.call(undefined));//[object Undefined]
console.log("null--->", Object.prototype.toString.call(null));//[object Null]
console.log("object--->", Object.prototype.toString.call({}));//[object Object]
console.log("array--->", Object.prototype.toString.call([]));//[object Array]
console.log("function--->", Object.prototype.toString.call(() => { }));//[object Function]
console.log("regexp--->", Object.prototype.toString.call(/\.js/));//[object RegExp]
console.log("symbol--->", Object.prototype.toString.call(Symbol()));//[object Symbol]

function tt({name='monkey', age=12}, other) {
    console.log('name--->', name);
    console.log('age--->', age);
    console.log('other--->', other);
}

tt({}, "ll");

let obj = {
    list: {
        name: 'monkey'
    },
    age: 12
};

let {lists: name = "cat"} = obj;
console.log('name--->', name);
console.log('lists--->', name);
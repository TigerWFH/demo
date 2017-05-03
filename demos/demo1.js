// Array(数组):数据的有序列表，数组的大小可以动态调整。
// 创建数组(2种方法)
let arr = new Array(3);
let arr0 = new Array(1, 2);
let arr1 = [];
// 读取数组的值：array.length属性很神奇
// es3--->instanceof;es5--->isArray()
// toLocaleString():返回数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。
// 									调用数组中每一项的toLocaleString()方法进行转换。
// toString()：返回数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。
// valueOf()： 返回数组
let str = ["green", "red", "yellow"];
console.log('toString--->', str.toString());
console.log('toLocaleString--->', str.toLocaleString());
console.log('valueOf--->', str.valueOf());
// Array: join(separator):string
let t = str.join(' ');
console.log('join--->', t);
// Stack(栈方法)
// Array: push(args):number ---> 添加元素到数组***尾部***，参数任意多个，并处理length,返回length
// Array: pop():any ---> 从数组***尾部***移除最后一项数据，并处理length，返回删除的项
let etA = new Array();
let tail = etA.pop();
console.log("tailer--->", tail);
// Queue(对方法)
// Array: push(args):number --->同上
// Array: shift():any ---> 从数组***前端***移除项，并处理length，返回移除的项
// Array: unshift(args):length ---> 从数组***前端***插入若干项，并返回length
// unshift和pop模拟相反顺序的队列
let head = etA.shift();
console.log('header--->', head);
// Sort(排序)
// Array: reverse()---> 倒序
// Array: sort(compare):Array---> 默认 升序，第一项最小。该方法调用每一项的toString()方法进行比较，
// 				即使是数字也是比较的字符串。compare:如果第一个参数a在第二个参数b之前，返回-1；否则返回0或1

// String(与字符串对应的函数进行对比)
// Array: concat(args):array--->args如果是数组，就将每一项合并到新数组
// Array: slice(begin[,end]):array--->负数处理类似string的slice
// Array: splice(position, number[,item]):array--->向数组的中部(删除、插入、替换)数据项,返回删除的项，修改了元数组
// Array: indexOf(item[,position])
// Array: lastIndexOf(item[,position])
// Iterator(迭代)
// Array: every(fn):boolean--->对数组每一项运行fn，如果fn对每一项都返回false，则返回false
// Array: some(fn):boolean--->对数组每一项运行fn,如果该函数对任一项返回true，则返回true
// Array: filter(fn):array--->对数组每一项运行fn，返回fn函数会返回true的项组成的数组
// Array: map(fn):array--->对数组每一项运行fn，并返回fn返回结果组成的数组
// Array：forEach(fn):void--->对数组每一项运行fn(和for循环一样)
let test = [0, 1, 2, 3];
let test1 = ['', '', '', 3];
let result = test.every((item, index, array) => {
	return !!item;
});
console.log('every--->', result);
result = test1.some((item, index, array) => {
	return !!item;
});
console.log('some--->', result);
// es5提供了缩小方法
// reduce(fn[,scale])--->fn(prev,cur,index,array)
// reduceRight(fn[,scale])
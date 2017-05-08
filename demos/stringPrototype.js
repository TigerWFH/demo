// 原型对象四 string.prototype
// properties():
// functions():
// 		-----------------改写继承的-------------------
// 		string.prototype.toString()
// 		string.prototype.toLocaleString()
// 		string.prototype.valueOf()

// 		-----------------自己的----------------------
// 		string.prototype.anchor(str):string--->str是a标签属性name的值，返回一目标字符串为text节点的a标签字符串（<a name=str>target</a>）
// 		string.prototype.link(url):string--->根据url创建<a>标签

// 		string.prototype.padEnd(targetLength[,padString])--->会用第二个参数中指定的填充字符串，在当前字符串的尾部不断填充，直到它达到第一个参数中指定的目标长度(默认是空格)。
// 		string.prototype.padStart(targetLength[,padString])--->同上
// 		string.prototype.nomalize([form])--->会按照指定的一种 Unicode 正规形式将当前字符串正规化.
// 		string.prototype.startsWith(searchString[,beginPos]):boolean--->用来判断当前字符串是否是以另外一个给定的子字符串“开头”的
// 		string.prototype.endsWith(searchString[,endPos]):boolean--->endPos,完全匹配返回true
// 		string.prototype.includes(searchString[,beginPos]):boolean--->beginPos是开始搜索的位置，存在返回true，否则返回false
// 		string.prototype.indexOf(searchValue[,fromIndex]):-1--->找到返回索引，没有返回-1
// 		string.prototype.lastIndexOf(searchValue[,fromIndex]):-1--->同上

// 		----------字符擦操作------------------------------
// 		string.prototype.concat(arg1,arg2,...):string--->将目标字符串和参数(链接)并返回
// 		string.prototype.split(separator[,limit]):array--->将字符串(分割)成字符串数组,不包括separator
//		string.prototype.slice(beginPos,endPos):string--->提取一个字符串的一部分，返回新字符串
// 		string.prototype.substr(beginPos,length):string---> 方法返回一个字符串中从指定位置开始到指定字符数的字符。
// 		string.prototype.substring(beginPos,endPos):string--->返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

// 		string.prototype.push(arg1,arg2,...):length--->堆栈的操作
// 		string.prototype.pop():item
// 		string.prototype.shift():item
// 		string.prototype.unshift(arg1,arg2,...):length

// 		string.prototype.toUpperCase():string--->大小写的转换
// 		string.prototype.toLocaleUpperCase():string
// 		string.prototype.toLowerCase():string
// 		string.prototype.toLocaleLowerCase():string

// 		----------去除空格--------------
// 		string.prototype.trim():string--->会删除一个字符串两端的空白字符。在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）
// 		string.prototype.trimLeft()
// 		string.prototype.trimRight()

// 		string.prototype.match(regexp):array--->一个包含了整个匹配结果以及任何括号捕获的匹配结果的 Array ；如果没有匹配项，则返回 null 。
// 		string.prototype.search(regexp):number--->如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1
// 		string.prototype.replace(regexp|substr,newstr|function):string--->方法返回一个由替换值替换一些或所有匹配的模式后的新字符串
// 		string.prototype.repeat(count):string--->构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本

// 		string.prototype.charAt(pos):string--->根据索引（>=0,小于o这是空字符串），返回对应的单字符串（就是只有一个字符的字符串）
// 		string.prototype.charCodeAt(pos):number(0-65535)--->length>pos>=0,小于0，则自动转为0,返回UTF-16编码
// 		string.prototype.codePointAt(pos):number(非负)--->返回unicode code point value
// 		string.prototype.localeCompare(compareString[,locales[,options]]):number--->返回-1,1,0
let test = "test";
console.log(test.anchor("ttt"));//<a name="test">ttt</a>
console.log(test.charAt(0));//t
console.log(test.charCodeAt(0));//116
console.log('\ud800\udc00'.codePointAt(1));//56320
console.log(test.concat(" ecmascript", "---monkey"));//test ecmascript---monkey
console.log(test.endsWith('tes', 3));//true
console.log(test.endsWith('t', 2));//false
console.log(test.endsWith('t', 1));//true
console.log(test.endsWith('t', 4));//true
console.log(test.includes('te'));//true
console.log(test.includes('te', 0));//true
console.log(test.includes('te', 1));//true
console.log(test.indexOf('es'));//1
console.log(test.indexOf('es', 2));//-1
console.log(test.link("https://www.baidu.com"));
console.log('b'.localeCompare('c'));//-1
console.log('b'.localeCompare('a'));//1
console.log('b'.localeCompare('b'));//0
let reg = /s/;
console.log(test.match(reg));//[s,index:2,input:test]
console.log(test.search(reg));//2
console.log(test.replace(reg, 'ttt'));//tetttt
console.log(test.repeat(3));//testtesttest
console.log("aa".repeat(5));//aaaaaaaaaaa
console.log(test.split('t'));//['','es','']--->根据seperator分隔数组
console.log(test.normalize("NFD"));
// console.log(test.padEnd(10));
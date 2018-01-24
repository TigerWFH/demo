// Map构造函数
// properties():
// 		this.length
// functions():
// 		Map([iterator])
let map = new Map();
console.log(map.size);//0
console.log(map.set("monkey", "monkey"));
console.log(map.size);//1


/** 
 * map 和 object的对比
 * Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, 
 * and detect whether something is stored at a key. Because of this (and because there were no built-in 
 * alternatives), Objects have been used as Maps historically; however, there are important differences 
 * that make using a Map preferable in certain cases:
 * Object和Map有很多类似的作用，比如设置key到value的映射，删除key，检测某个值是否存储在key上。由于这些原因（还因为没有内置可用替换数据结构），
 * 过去，我们一直把object当作map使用。然而，在一些情况下，使用map效果更好，这和使用object还是有很大的不同的。
 * An Object has a prototype, so there are default keys in the map that could collide with your keys 
 * if you're not careful. As of ES5 can be bypassed by using map = Object.create(null), but is seldom done.
 * The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, 
 * objects, and any primitive.
 * object有原型对象，所以就会有一些默认的key存在，，一不小心，这就有可能和你要使用的key产生冲突。ES5可以使用Object.create(null)消除
 * 原型对象来模拟map，但是很少这样做。还有，Object的key只能是string或者symbol类型，但是map的key可以是基本类型和引用类型，当然也包括函数。
 * You can get the size of a Map easily with the size property, while the size of an Object must be determined 
 * manually.
 * map包含size属性，可以直接获取map中数据个数，但是object的数据个数需要手动处理获取。
 * This does not mean you should use Maps everywhere. If you're not sure which one to use, ask yourself the 
 * following questions:
 * 但这并不意味着你只用map而不用object。如果不确定要使用哪一个，就看看应用场景是不是以下情况：
 * Are keys usually unknown until run time? Do you need to look them up dynamically?
 * key是不是直到运行时才能确定？你需要动态的查询这些key吗？
 * Do all values have the same type? Can they be used interchangeably?
 * 所有的值是不是同一类型？他们可以互相交换吗？
 * Do you need keys that aren't strings?
 * 你需要使用非string类型的key吗？
 * Are key-value pairs frequently added or removed?
 * 添加（删除）key-value对频繁吗？
 * Do you have an arbitrary (easily changing) number of key-value pairs?
 * 需要使用很多键值对（容易改变的键值对）？
 * Is the collection iterated?
 * 集合是否可枚举？
 * If you answered 'yes' to any of those questions, that is a sign that you might want to use a Map. 
 * Contrariwise, if you have a fixed number of keys, operate on them individually, or distinguish between 
 * their usage, then you probably want to use an Object.
 * 如果以上问题回答是yes，那就使用map。相反，如果你有固定个数的key，并独立处理它们，或区分他们的用法，那就使用object。  
*/
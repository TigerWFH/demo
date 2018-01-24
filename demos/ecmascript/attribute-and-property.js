/**
* 测试以下几个函数的使用：
* Object.defineProperty
* Objetc.defineProperties
* Object.getOwnPropertyDescriptor
*/ 

var person = {};
Object.defineProperty(person, "name", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "monkey"
});
console.log("person.name-origin--->", person.name);
person.name = "tiger";
console.log("person.name-new--->", person.name);

Object.defineProperties(person, {
    "age":{
        value: 12,
        configurable: true,
        enumerable: true,
        writable: true
    },
    "gender": {
        value: "boy"
    }
});
console.log("person.name--->", person.name);
console.log("person.age--->", person.age);
console.log("person.gender--->", person.gender);
console.log("person--->", person);
console.log("descriptor--->", Object.getOwnPropertyDescriptor(person, "age"));

/**
 * 比较一下集中便利方式：
 * in                                       :
 * for...in                                 :   遍历给定对象 可枚举属性（包括原型的可枚举属性）
 * Object.keys                              :   返回给定对象 自身可枚举属性 组成的数组（顺序和for...in一致）
 * Object.prototype.hasOwnProperty          :
 * Object.prototype.propertyIsEnumerable    :
 * Object.getOwnPropertyNames               :
 */ 
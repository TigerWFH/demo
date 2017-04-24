var People = (function () {
    function People(name, age) {
        if (name === void 0) { name = "monkey"; }
        if (age === void 0) { age = 12; }
        this._name = name;
        this._age = age;
    }
    People.prototype.getName = function () {
        return this._name;
    };
    People.getRatio = function () {
        return People.ratio;
    };
    return People;
}());
People.ratio = 30;
var instance = new People();
console.log('name--->', instance.getName());
console.log('ratio--->', People.getRatio());

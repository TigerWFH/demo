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


const TARGET_DATA = [1, 23,12, 45, 45, 6, 9, 2, 45, 56, 76,1, 23,12, 45, 45, 6, 9, 2, 45, 56, 76];
function insertionSort(_target) {
    let target = _target;
    if (Array.isArray(target)) {
        if (target.length <= 1) {
            return target;
        }
        let j = 1;
        while (j < target.length) {
            let key = target[j];
            let i = j - 1;
            while (i >= 0 && i < target.length) {
                if (target[i] > key) {
                    target[i + 1] = target[i];
                    target[i] = key;
                }
                i--;
            }
            j++;
        }

        return target;
    }


    return null;
}

let ret = insertionSort(TARGET_DATA);

console.log('result--->', ret);

// 记录一些有趣的问题
// n阶汉诺塔问题(Hanoi)
// 假设有3个分别命名为X、Y、Z得塔座，在塔座X上插有n个直径大小各不不同、依小到大
// 编号为1，2，3，……，n的圆盘。现要求将塔座X上的所有圆盘移到Z上，并仍按照同样的
// 顺序叠排，圆盘移动时必须遵循如下规则：
//  1、每次只能移动一个圆盘
//  2、圆盘可以插在X、Y、Z任意一个塔座上
//  3、任何时刻都不能将一个较大得圆盘叠压在较小得圆盘之上。
// 编码解决问题
function move(n, x, y) {
    console.log(`${n}号盘子移动：${x}--->${y}`);
}
function hanoi(n, x, y, z) {
    if ( n <= 0) {
        const err = new Error('n小于1，问题不成立');
        throw err;
    }

    if (1 === n) {
        console.log(`${n}号盘子移动：${x}--->${z}`);
    }
    else {
        arguments.callee(n-1, x, z, y);
        move(n, x, z);
        arguments.callee(n-1, y, x, z);
    }
}

const n = 4;
console.log(`${n}个盘子解决方案：`);
hanoi(n, 'A', 'B', 'C');
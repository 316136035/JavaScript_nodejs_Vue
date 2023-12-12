//创建函数A
function functionA() {
    console.log("A()函数")
}
//创建函数B
function functionB(x) {
    console.log("B()函数", x)
}
//创建对象
const obj = {
    name: '周先生',
    age: 19,
}
//创建属性
const A='AAAAAA'

//暴露函数
module.exports = {
    //暴露函数
    functionA: functionA,
    // 暴露函数
    functionB: functionB,
    // 暴露对象
    obj: obj,
    //暴露属性
    A:A
}

//还有这种暴露方式
// exports.functionA = functionA;
// exports.functionB = functionB;
// exports.obj=obj;
// exports.A=A;

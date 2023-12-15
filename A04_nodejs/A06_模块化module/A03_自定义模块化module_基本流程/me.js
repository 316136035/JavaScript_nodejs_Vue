//创建对象
const user={ name:'周伟彬'}
//暴露对象
module.exports={user:user}
//打印暴露对象
console.log(arguments.callee.toString())

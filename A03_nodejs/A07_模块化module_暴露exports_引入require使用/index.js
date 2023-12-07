//导入js模块 当不写文件后缀名优先引入js后缀
const functions=require('./module.js')
//调用模块中的函数
functions.functionA()
//调用模块中的函数
functions.functionB("我是函数B")

//获取模块中的对象
console.log(functions.obj)

//获取模块中的属性
console.log(functions.A)

//导入json模块 当不写文件后缀名优先引入js后缀
const jsons=require('./json.json')
console.log(jsons)
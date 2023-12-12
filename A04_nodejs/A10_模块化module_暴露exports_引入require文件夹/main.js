//导入文件模块  （如果文件夹中main属性不存在，或者package.,json不存在则会尝试导入文件夹下的 index.js和index.json ,不然就报错）
//main中引入模块  （会自动向上查找）
const modu=require('./module')

//使用main中引入模块的函数
 console.log(modu.functionA())
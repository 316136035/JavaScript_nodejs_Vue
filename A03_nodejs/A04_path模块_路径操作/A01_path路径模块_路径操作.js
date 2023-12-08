//导入path模块 （nodejs只带不用安装）
const path =require('path')

//路径拼接（__dirname获取到当前文件路径，要拼接的文件名）
let  pr=  path.resolve(__dirname,'文件名.txt')
console.log('路径拼接:',pr)

//显示当前系统的文件分隔符
console.log('显示当前系统的文件分隔符:',path.sep)

//返回一个路径的对象  //__filename是获取单前文件的绝对路径
console.log('返回一个路径的对象:',path.parse(__filename))

//获取文件名
console.log('获取文件名:',path.basename(__filename))

//获取文件扩展名
console.log('获取文件扩展名:',path.extname(__filename))

//获取文件名路径目录
console.log('获取文件名路径目录录:',path.dirname(__filename))




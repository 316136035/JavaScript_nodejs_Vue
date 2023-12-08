//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');
// //同步写入文件，这种写会法替换整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容")
//'./fs文件模块.txt'===相对路径 当命令在其他目录执行js文件时候，相对路径为执行命令的路径（可以在使用__dirname获取当前目录的路径+绝对路劲）
// fs.writeFileSync('./fs文件模块.txt',`瀛洲学士风流远Sync` )
//获取当前目录的路径
console.log('获取当前目录的路径:',__dirname)
console.log(__dirname+'/fs文件模块.txt')
//可以使用绝对路劲
fs.writeFileSync(__dirname+'/fs文件模块.txt',`瀛洲学士风流远Sync` )
//获取当前文件的路径
console.log('获取当前文件的路径:',__filename)



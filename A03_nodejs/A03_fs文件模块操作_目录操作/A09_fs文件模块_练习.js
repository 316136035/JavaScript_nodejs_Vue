//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');
//读取目录中的文件夹/文件
fs.readdir('../A02_fs文件模块操作_目录操作', (err, data) => {
    if (err) { return }
    //变量文件夹/文件数组
    data.forEach((item) => {
        //通过-拆分文件名
        let data1 = item.split('_')
        //结构赋值
        let [num, fs, name] = data1
        console.log(num, '    ', fs, '    ', name)
    })


})
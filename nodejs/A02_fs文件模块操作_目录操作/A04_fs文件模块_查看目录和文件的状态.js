//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');

//获取目录/文件的状态（创建时间，修改时间，类型，文件大小，等等等...）
fs.stat ('../A01_fs文件模块操作_目录操作',(err,data)=>{
    if(err){console.log('查看失败')}
    console.log("文件/目录状态：",data)
    console.log("判断是否为文件：",data.isFile())
    console.log("判断是否为目录：",data.isDirectory())
})
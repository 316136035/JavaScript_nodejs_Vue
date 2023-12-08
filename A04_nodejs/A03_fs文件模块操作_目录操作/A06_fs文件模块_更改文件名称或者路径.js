//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');
//更改文件名称或者路径（'原文件路径'，'修改后路径文件名'，回调方法）
fs.rename('./A02_fs文件模块.txt','./A02_fs文件模块.txt', error=>{
    if(error){
        console.log("修改文件名失败")
        return}
})

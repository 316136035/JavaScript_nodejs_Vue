//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');

//创建目录 只能创建一级目录(目录路径，回调函数)
fs.mkdir(`./目录名称`, error => {
    if (error) { console.log('创建失败') }
    console.log('创建成功')
})
//创建多层目录 (目录路径，{recursive:true}递归创建，回调函数)
fs.mkdir('./A目录/B目录/C目录',{recursive:true}, error => {
    if (error) { console.log('递归创建失败') }
    console.log('递归创建成功')
})

//读取目录和文件
fs.readdir('../A01_fs文件模块操作_目录操作',(err,data)=>{
    if(err){console.log('读取目录失败')}
    console.log(data)
})
//删除单个文目录
fs.rmdir('./目录名称',error => {
    if (error) { console.log('删除失败') }
    console.log('删除成功')
})

//递归删除目录
// fs.rmdir('./A目录',{recursive:true},error => {
//     if (error) { console.log('递归删除失败') }
//     console.log('递归删除成功')
// })
//递归删除目录（优先使用下面删除方法）
fs.rm('./A目录',{recursive:true},error => {
    if (error) { console.log('递归删除失败') }
    console.log('递归删除成功')
})



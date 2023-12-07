//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');

//异步读取 （路径，(失败回调+成功回调)=>{}）
fs.readFile('.A01_fs文件模块_读取.js', (err, data) => {
     // err 错误对象  成功的话 err为null
    if (err) { throw err }
    //读取为Budder数组  转成字符串
    const ds = data.toString();
    console.log("异步读取: ",ds)
})


//同步读取 读取为Budder数组 
let data= fs.readFileSync('A01_fs文件模块_读取.js')
// Budder数组 转成字符串
console.log("同步读取: ",data.toString())

//创建文件输入流（读取流，异步读取）
const rs= fs.createReadStream('A01_fs文件模块_读取.js');
//绑定读取成功回调  （每读取一组就调用一次这个回调）
rs.on('data',data=>{
    //读取的是buffer数组
    console.log("读取成功..",data, "每一组的长度：",data.length)
  
})
//绑定读取失败回调
rs.on('error', err=>{
    console.log("读取失败..",err)
})
//绑定读取读取完毕
rs.on('end',()=>{
    console.log("读取完毕..")
})
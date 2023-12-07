//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');
// //异步读取和写入
// //异步读取
// fs.readFile('./A04_借口.ogg', (err, data) => {
//     // err 错误对象  成功的话 err为null
//     if (err) { throw err }
//     //异写入
//     fs.writeFile('./A04_借口1.ogg', data, err => {
//         if (err) { console.log("写入失败")}
//         console.log("写入成功")
//     })

// })

//同步读取和写入
//同步读取
// let  data= fs.readFileSync('./A04_借口.ogg')
// //同步写入
// fs.writeFileSync('./A04_借口1.ogg',data)+



//输入流和输出流（又叫‘读取流和写入流’） 读取和写入
//创建输入流
const rs = fs.createReadStream('./A04_借口.ogg')
//创建输出流
const ws = fs.createWriteStream('./A04_借口1.ogg')

//绑定读取成功回调 （每读取一组就调用一次这个回调）
rs.on('data', data => {
    //读取的是buffer数组
    // console.log("读取成功..",data, "每一组的长度：",data.length)
    //通过输出流（写入流）写入
    ws.write(data)
    //关闭流
    WS.close();

})
//绑定读取失败回调
rs.on('error', err => {
    console.log("读取失败..")
})
//绑定读取读取完毕
rs.on('end', () => {
    ws.close();
    console.log("读取完毕..")
})

//通过管道也可以实现
// rs.pipe(ws)

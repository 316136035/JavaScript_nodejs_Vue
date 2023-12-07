//导入fs文件模块 （nodejs只带不用安装）
const  fs=require('fs');
// //异步写入文件，这种写法会替换整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容"，回填函数）   
// fs.writeFile('./A04_fs文件模块.txt',`瀛洲学士风流远` ,err=>{
//     // err 错误对象  成功的话 err为null
//     if(err){
//         console.log("写入失败")
//     }
//     console.log("写入成功")
// });
// //异步写入文件，这种写法会追加整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容"，配置对象,回填函数）   
// fs.writeFile('./A04_fs文件模块.txt',`配置对象,{flag:'a'}` ,{flag:'a'},err=>{
//     // err 错误对象  成功的话 err为null
//     if(err){
//         console.log("配置对象写入失败")
//     }
//     console.log("配置对象写入成功")
// });
// //异步写入文件，这种写法追加整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容"，回填函数）   
// fs.appendFile('./A04_fs文件模块.txt',`瀛洲学士风流远appendFile` ,err=>{
//     // err 错误对象  成功的话 err为null
//     if(err){
//         console.log("追加写入失败")
//     }
//     console.log("追加写入成功")
// })

// //同步写入文件，这种写会法替换整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容")
// fs.writeFileSync('./A04_fs文件模块.txt',`瀛洲学士风流远Sync` )
// //同步写入文件，这种写法追加整个文件的内容（文件路径(文件不存在就会创建新的文件，文件存在覆盖)，"文件内容")
// fs.appendFileSync('./A04_fs文件模块.txt',`appendFileSync` )

//创建文件输出流（写入流）
const WS =fs.createWriteStream('./A02_fs文件模块.txt')
//流式写入

WS.write("A\r\n")
WS.write("B\r\n")
WS.write("C\r\n")
//关闭流
WS.close();


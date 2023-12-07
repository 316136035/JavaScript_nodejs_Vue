//导入fs文件模块 （nodejs只带不用安装）
const fs = require('fs');

//异步删除文件 （要删除的文件路径，回调函数） //同步删除文件使用unlinkSync
fs.unlink('./A04_借口 copy.ogg', error => {
    if (error) { console.log("删除失败") }
    console.log("删除成功")
})
//异步删除文件 （要删除的文件路径，回调函数） //同步删除文件使用rmSync
fs.rm('./A04_借口 copy.ogg', error => {
        if (error) { console.log("删除失败") }
        console.log("删除成功")
    }
)

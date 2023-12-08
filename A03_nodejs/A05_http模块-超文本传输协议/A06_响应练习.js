const http = require('http')//导入http模块 （nodejs只带不用安装）
const fs = require('fs')//导入fs文件模块 （nodejs只带不用安装）
//创建http服务器
const server = http.createServer((request, response) => {
    //设置响应头 浏览器可以接收类型
    response.setHeader('content-Type', 'text/html;charset=utf-8;')
    //异步读取 （路径，(失败回调+成功回调)=>{}）
    fs.readFile(__dirname + '/A06.html', (err, data) => {
        // err 错误对象  成功的话 err为null
        if (err) { throw err }
        //一般在这里写入响应体就不会在end中写入响应体
        response.end(data)
    })

})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(80,'taoshenjia.vip', () => {
    console.log("服务器启动成功.. http://127.0.0.1:80")

})
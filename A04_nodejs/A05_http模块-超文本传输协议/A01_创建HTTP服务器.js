//导入http模块 （nodejs只带不用安装）
const http = require('http')
//创建http服务器
const server = http.createServer(
    //请求对象，响应对象
    (request, response) => {
        ////设置响应头  设置浏览器可以接收类型
        response.setHeader('content-Type', 'text/hmtl;charset=utf-8;')
        //响应给浏览器
        response.end("响应成功......")

    })
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等  
//(端口, 域名，函数）
server.listen(3000, '127.0.0.1',() => {
    console.log("服务器启动成功..")
})
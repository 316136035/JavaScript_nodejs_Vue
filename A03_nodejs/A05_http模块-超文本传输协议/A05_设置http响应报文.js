//导入http模块 （nodejs只带不用安装）
const http = require('http')
//创建http服务器
const server = http.createServer((request, response) => {
    //设置响应状态码
    response.statusCode = 201
    //设置响应状态码描述
    response.statusMessage = 'ok'
    //设置响应头 浏览器可以接收类型
    response.setHeader('content-Type', 'text/html;charset=utf-8;')
    //一般在这里写入响应体就不会在end中写入响应体
    response.write('服务器启动成功')
    response.write('        一般在这里写入响应体就不会在end中写入响应体')
    //响应
    response.end()

})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(80,'taoshenjia.vip', () => {
    console.log("服务器启动成功.. http://127.0.0.1:80")

})
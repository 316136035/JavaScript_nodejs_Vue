
var express = require('express');//引入express框架
var path = require('path');//引入path路劲操作
var cookieParser = require('cookie-parser');//引入cookies 模块
const { log } = require('console');
//创建应用对象
const server = express();
//创建路由 (匹配 ip+端口)
server.get('/HomePage', (request, response) => {


    const requestText = {
        url: request.url,//请求url
        method: request.method,//请求方法
        path: request.path,//请求路径

        params: request.params,//请求参数
        ip: request.ip,//请求ip
        headers: request.headers,//请求头
        cookies: request.cookies,//请求cookies
        body: request.body,//请求体
        ha:"你好"

    }
    console.log(JSON.stringify(requestText));
    response.send(JSON.stringify(requestText))

})


//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
server.listen(4000, "127.0.0.1", () => {
    console.log('服务器已经启动...http://127.0.0.1:4000/HomePage/')


})

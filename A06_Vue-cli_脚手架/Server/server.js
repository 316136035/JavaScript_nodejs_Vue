
var express = require('express');//引入express框架
var path = require('path');//引入path路劲操作
var cookieParser = require('cookie-parser');//引入cookies 模块
//创建应用对象
const server = express();
//创建路由 (匹配 ip+端口)
server.get('/HomePage', (request, response) => {


    const requestText={
        path:request.path,
        query:request.query,
        headers:request.headers,
        cookies:request.cookies,
        method:request.method,
        ip:request.ip,
        url:request.url,
        body:request.body,
        params:request.params,
  }

    response.send(JSON.stringify(requestText))

})


//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
server.listen(4000, "127.0.0.1",() => {
    console.log('服务器已经启动...http://127.0.0.1:4000/HomePage/')

   
})

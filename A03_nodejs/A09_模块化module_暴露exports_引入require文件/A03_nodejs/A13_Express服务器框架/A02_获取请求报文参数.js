//导入express模块
const express = require('express')
//创建应用对象
const server = express();
//创建get路由
server.get('/get1', (request, response) => {
    //原生方法获取请求报文参数
    console.log('请求方式:', request.method)
    console.log('请求url路径:', request.url)
    console.log('http版本:', request.httpVersion)
    console.log('全部请求头:', request.headers)
    console.log('部分请求头:', request.header('user-agent'))
    response.send('原生方法获取请求报文参数')
})

//创建get路由
server.get('/get2', (request, response) => {
    //express模块方法获取请求报文参数
    console.log('请求url路径:', request.path)
    console.log('请求url参数:', request.query)
    console.log('请求客户端IP:', request.ip)
    console.log('部分请求头:', request.get('user-agent'))
    response.send('express模块方法获取请求报文参数')
})
//创建post路由
server.post('/post', (request, response) => {
    response.send('post')
})
//创建路由 (匹配 ip+端口)
server.get('/', (request, response) => {
    response.send("主页")
})
//创建路由 (匹配上面不成功的路径全部)
server.all('*', (request, response) => {
    response.send("404")
})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
server.listen(80, () => {
    console.log('服务器已经启动...')
})

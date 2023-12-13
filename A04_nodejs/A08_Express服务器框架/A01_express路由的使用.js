//导入express模块
const express = require('express')
//创建应用对象
const server = express();
//创建路由 (匹配 ip+端口)
server.get('/', (request, response) => {
    response.send("主页")
})
//创建get路由
server.get('/get', (request, response) => {
    response.send('get')
})
//创建post路由
server.post('/post', (request, response) => {
    response.send('post')
})

//创建路由 (匹配上面不成功的路径全部)
server.all('*', (request, response) => {
    response.send("404")
})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
server.listen(80, "127.0.0.1",() => {
    console.log('服务器已经启动...')
    console.log('请求地址...','http://127.0.0.1:80/get')
    console.log('请求地址...','http://127.0.0.1:80/post')
    console.log('请求地址...','http://127.0.0.1:80')
    console.log('请求地址...','http://127.0.0.1:80/匹配上面不成功的路径全部')
    
   
})

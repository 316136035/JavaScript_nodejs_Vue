//导入http模块 （nodejs只带不用安装）
const http = require('http')
//创建http服务器
const server = http.createServer(
    //请求对象，响应对象
    (request, response) => {
        //获取请求方式
        console.log(request.method)
        //获取请求路径+key——value
        console.log(request.url)
        //获取http协议版本号
        console.log(request.httpVersion)
        //获取全部请求头
        console.log(request.headers)
        //获取部分请求头
        console.log(request.headers.accept)
        //获取请求体
        let body = '';
        //绑定data方法 回调函数
        request.on('data', (data) => {
            body += data.toString();
        })
        //绑定end方法 回调函数
        request.on('end', () => {
            console.log(body)
            //响应给浏览器
            response.end(body)
        })
        //设置浏览器可以接收类型
        response.setHeader('content-Type', 'text/html;charset=utf-8;')


    })
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(80,'taoshenjia.vip', () => {
    console.log("服务器启动成功.. http://127.0.0.1/:80")
})
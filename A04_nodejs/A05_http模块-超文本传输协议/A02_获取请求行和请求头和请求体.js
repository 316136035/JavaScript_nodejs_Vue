//导入http模块 （nodejs只带不用安装）
const http = require('http')
//创建http服务器
const server = http.createServer(
    //请求对象，响应对象
    (request, response) => {
          response.setHeader('content-Type', 'text/html;charset=utf-8;')//设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
        console.log('获取请求方式',request.method)//获取请求方式
        console.log('获取请求路径和key:value:',request.url)//获取请求路径和key：value：
        console.log('获取http协议版本号',request.httpVersion)//获取http协议版本号
        console.log('获取全部请求头',request.headers)//获取全部请求头
        console.log('获取ip地址和端口',request.headers.host)//获取ip地址和端口
        console.log('获取部分请求头',request.headers.accept)//获取部分请求头
        let body = '';//定义一个变量 用于接收请求体
        // 用于在请求接收到数据时执行回调函数。当请求接收到响应的数据时，会触发 'data' 事件
        request.on('data', (data) => {
            body += data.toString();//将请求体数据添加到变量中
            // response.end(body)//响应给浏览器
        })
        //用于在请求结束时执行回调函数。当请求结束时，通常指响应已经完全接收，并且服务器没有发送任何额外的数据时，会触发 'end' 事件。
        request.on('end', () => {
            console.log( '获取请求体:',body)
            //响应给浏览器
            response.end('响应成功...')
        })
      


    })
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(3000,'127.0.0.1', () => {
    console.log("服务器启动成功 3000 端口， http://127.0.0.1:3000/A02?key=value")
})
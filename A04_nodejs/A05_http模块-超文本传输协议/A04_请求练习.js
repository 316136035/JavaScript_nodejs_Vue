//导入http模块 （nodejs只带不用安装）
const http = require('http')
//创建http服务器
const server = http.createServer((request, response) => {
    response.setHeader('content-Type', 'text/html;charset=utf-8;') //设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
    let { method } = request;  //结构赋值方式 获取请求类型
  //模块解释url当url中没有域名的时候和端口的时候，需要补全URL，后面这个参数就是补全URL用的)
  const url = new URL(request.url, 'http://127.0.0.1:3000')
    //结构赋值方式 获取请求路径
    let { pathname } = url
    if (method === 'GET' && pathname === '/LogIn') {
        response.end("登陆页面")
    } else {
        if (method === 'GET' && pathname === '/Register') {
            response.end("注册页面")
        } else {
            response.end("404 找不到页面")
        }
    }

})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(3000,'127.0.0.1', () => {
    console.log("服务器启动成功.. http://127.0.0.1:3000/LogIn?key=value")
    console.log("服务器启动成功.. http://127.0.0.1:3000/Register?key=value")
})
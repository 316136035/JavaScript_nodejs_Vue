//导入http模块 （nodejs只带不用安装）
const http = require('http')
//导入url解释模块 （nodejs只带不用安装）
const url = require('url')
///创建http服务器
const server = http.createServer((request, response) => {
    ////设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
    response.setHeader('content-Type', 'text/html;charset=utf-8;')
    //只用url模块解释url
    let urlparse = url.parse(request.url)
    //只用url模块解释url  第2个参数是true key_value就为对象
    let urlparsetrue = url.parse(request.url, true)
    //获取url中的路径
    console.log(urlparse.pathname)

    //模块解释url  方法2  ('/路径？key=value'，后面这个参数就是补全URL用的)
    const newurl = new URL(request.url, 'http://127.0.0.1')
    //打印完整的url
    // console.log(newurl)
    //获取路径
    console.log(newurl.pathname)
    //通过key获取value
    console.log(newurl.searchParams.get('key'))


    response.end("响应成功...")
})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(3000,'127.0.0.1', () => {
    console.log("服务器启动成功.. http://127.0.0.1:3000/A03?key=value")
})
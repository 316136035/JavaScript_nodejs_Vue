//导入http模块 （nodejs只带不用安装）
const http = require('http')
//导入url解释模块 （nodejs只带不用安装）
const url = require('url')
///创建http服务器
const server = http.createServer((request, response) => {  ////设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
    response.setHeader('content-Type', 'text/html;charset=utf-8;')//设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
   
    //用url模块解释url  方法1  第2个参数是true query参数会变成对象
    let urlparse = url.parse(request.url, true)
    console.log('url.parse()函数获取url中的路径:', urlparse.pathname)//获取url中的路径
    console.log('url.parse()函数获取url中的参数:',  urlparse.query)//获取url中的参数（对象）
    console.log('url.parse()函数获取url中的参数的值:',  urlparse.query.key1)//获取url中的参数（对象）


    //模块解释url  方法2  (当url中没有域名的时候和端口的时候，需要补全URL，后面这个参数就是补全URL用的)
    const newurl = new URL(request.url, 'http://127.0.0.1:3000')
    console.log('URL;',newurl)  //打印完整的url
    console.log('URL;',newurl.pathname) //获取路径
    console.log('URL;',newurl.searchParams.get('key2'))   //通过key获取value


    response.end("响应成功...")
})
//服务器--->监听服务  HTTP协议默认端口是80。HTTPS协议的默认端口是443，HTTP服务开发常用端口有3000，8080， 8090,9000等
//(端口, 域名，函数）
server.listen(3000, '127.0.0.1', () => {
    console.log("服务器启动成功.. http://127.0.0.1:3000/A03?key1=value1&key2=value2")
})
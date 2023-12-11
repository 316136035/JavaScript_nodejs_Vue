const http = require('http');//导入http文件模块 （nodejs只带不用安装）
const fs = require('fs');//导入fs文件模块 （nodejs只带不用安装）
const server = http.createServer((request, response) => {
    //设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
    response.setHeader('content-Type', 'text/html;charset=utf-8;')
    //静态资源是指 内容长时间不发生改变的资源，例如图片，视频，CSS 文件，JS文件，HTML文件，字体文件等

    //页面加载的html和css文件路径和js'路径 在同一个目录 所以要使用路径来处理返回的文件
    //结构赋值方式 获取请求路径
    let { pathname } = new URL(request.url, "http://127.0.0.1:80")
    //拼接文件路径（获取上一级路径）
    let root = __dirname + '/../';
    console.log('接文件路径（获取上一级路径）:',root);
    ///拼接文件路径（当前目录）
    let url = root + 'A06_http模块-静态资源服务/page' + pathname;
    console.log('root+url:', url)
    //异步读取 （路径，(失败回调+成功回调)=>{}）
    fs.readFile(url, (err, data) => {
        // err 错误对象  成功的话 err为null
        if (err) {

            //设置状态码， 
            response.statusCode = 500
            //设置错误信息
            response.end('读取文件失败..')
        }
        //响应文件内容
        response.end(data)
    })
})
server.listen(80, '127.0.0.1', () => {
    console.log("服务器启动成功.. http://127.0.0.1:80/index.html")
})
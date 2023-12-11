const http = require('http');//导入http文件模块 （nodejs只带不用安装）
const fs = require('fs');//导入fs文件模块 （nodejs只带不用安装）
const { log } = require('console');
const server = http.createServer((request, response) => {

    //静态资源是指 内容长时间不发生改变的资源，例如图片，视频，CSS 文件，JS文件，HTML文件，字体文件等

    //定义响应类型
    let types = { html: 'text/html;charset=utf-8;', css: 'text/css', js: 'text/javascript', png: 'image/png', jpg: 'image/jpeg', ico: 'image/ico', gif: 'image/gif', mp4: 'video/mp4', mp3: 'audio/mpeg', json: 'application/json' };
    //页面加载的html和css文件路径和js路径  所以要动态变更的文件路径
    let url = new URL(request.url, "http://127.0.0.1:80")
    //结构赋值方式 获取请求路径
    let { pathname } = url;
    //拼接文件路径（'../'获取上一级路径）
    let root = __dirname+'/' + '../';
    ///拼接文件路径（当前目录）
    let urlall = root + 'A06_http模块-静态资源服务/static' + pathname;
    // console.log('root+url:', url);
    //异步读取 （路径，(失败回调+成功回调)=>{}）
    fs.readFile(urlall, (err, data) => {
        // err 错误对象  成功的话 err为null
        if (err) {
            //设置状态码， 
            response.statusCode = 500;
            //设置错误信息
            response.end('读取文件失败..')
        } else {
            //设置状态码， 
            response.statusCode = 200;

            //获取文件扩展名

            let extension = url.pathname.split('.')[1]
            let type = types[extension];
            console.log(type);


            //设置响应头  设置浏览器可以接收类型，  设置编码（防止乱码）
            response.setHeader('content-Type', type);
            //设置响应内容
            response.end(data)
        }




    })
})
server.listen(80, '127.0.0.1', () => {
    console.log("服务器启动成功.. http://127.0.0.1:80/index.html")
})
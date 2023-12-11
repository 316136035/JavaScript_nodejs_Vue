const http = require('http');//导入http文件模块 （nodejs只带不用安装）
const fs = require('fs');//导入fs文件模块 （nodejs只带不用安装）
const path = require('path');//导入path路径模块 （nodejs只带不用安装）
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
};


const server = http.createServer((request, response) => {
    //设置响应头 浏览器可以接收类型
    response.setHeader('content-Type', 'text/html;charset=utf-8;')
    //判断请求方式
    if (request.method !== 'GET') {
        //设置状态码， 
        response.statusCode = 405;
        //设置错误信息
        response.end('请求方式不对')
        return;
    }

    //结构赋值方式 获取请求路径
    let { pathname } = new URL(request.url, "http://127.0.0.1:80")
    //拼接文件路径（获取上一级路径）
    let root = __dirname + '/../';
     //页面加载的html和css文件路径和js路径  所以要动态变更的文件路径
    let url = root + 'A05_http模块-静态资源服务/page' + pathname;

    //异步读取 （路径，(失败回调+成功回调)=>{}）
    fs.readFile(url, (err, data) => {
        // err 错误对象  成功的话 err为null
        if (err) {
            /*常见系统错误
                    ENOENT   （没有这样的文件或目录）
                    ETIMEDOUT文件或目录）
                    EPERM（不允许操作）
                    ACCES（权限被拒绝） 
                    其他查看nodejs API
                                     */

            switch (err.code) {
                case 'ENOENT':
                    //设置状态码， 
                    response.statusCode = 404
                    //设置错误信息
                    response.end('读取文件失败..ENOENT（没有这样的文件或目录）')
                    break;
                case 'ETIMEDOUT':
                    //设置状态码， 
                    response.statusCode = 404
                    //设置错误信息
                    response.end('读取文件失败..（操作超时）')
                    break;
                case 'EPERM':
                    //设置状态码， 
                    response.statusCode = 404
                    //设置错误信息
                    response.end('读取文件失败..（不允许操作）')
                    break;
                case 'EACCES':
                    //设置状态码， 
                    response.statusCode = 404
                    //设置错误信息
                    response.end('读取文件失败..（权限被拒绝）')
                    break;
                default:
                     //设置状态码， 
                    response.statusCode = 500
                    response.end('其他错误...')
                    break;

            }


            return;
        }

        //响应文件内容
        response.end(data)
    })

    //获取文件扩展名
    let extname = path.extname(url)
    //截取扩展名
    let extname1 = extname.slice(1)
    //通过文件扩展名获取请求的类型，
    let type = mimes[extname1]
    //判断请求的类型是否为存在
    if (type) {
        //判断是否为html页面 是就添加字符
        if (extname1 === 'html') {
            //设置响应头 浏览器可以接收类型(处理中文乱码文件 'charset=utf-8')
            response.setHeader('content-Type', type + ';charset=utf-8;')
        } else {
            response.setHeader('content-Type', type)
        }

    } else {
        //设置响应头 对于未知的资源类型，可以选择 application/octet-stream类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的下载效果
        response.setHeader('content-Type', 'application/octet-stream')
    }

})
server.listen(80, () => {
    console.log("服务器启动成功.. http://127.0.0.1:80/index.html")
})
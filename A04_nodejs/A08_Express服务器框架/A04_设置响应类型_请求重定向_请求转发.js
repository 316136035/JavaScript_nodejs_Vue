// 引入express服务器框架
const express = require('express');
// 创建服务器
const server = express();

//路由设置 设置响应头类型
server.get('/Set_status_code', (req, res) => {
    res.status(200);//设置状态码
    // res.set('key', 'value');//设置响应头类型
 res.send('expresss会自动响应文件类型');//渲染页面  express服务器框架会自动设置响应头类型
});
server.get('/download', (req, res) => {
    res.statusCode = 200;//设置状态码
    res.set('Content-Disposition', 'attachment; filename=filename.mp4') ;//设置为下载类型的响应头类型
    //响应文件
    res.sendFile(__dirname + '/publi/1.mp4');//渲染页面  express服务器框架会自动设置响应头类型


});
//路由设置 设置响应头类型为json类型
server.get('/json', (req, res) => {
    res.statusCode = 200;//设置状态码
    res.json({
        name: '张三',
        age: 18
    });
   

});

//路由设置 设置响应头类型下载文件
server.get('/download', (req, res) => {
    res.statusCode = 200;//设置状态码
    res.set('Content-Disposition', 'attachment; filename=filename.mp4') ;//设置为下载类型的响应头类型
    //响应文件
    res.sendFile(__dirname + '/publi/1.mp4');//渲染页面  express服务器框架会自动设置响应头类型


});
//路由设置 设置为重定向
server.get('/redirect', (req, res) => {
   res.redirect('https:www.jd.com');

});









server.listen(3000,'127.0.0.1',()=>{
    console.log('服务器启动成功 http://127.0.0.1:3000/Set_status_code');
    console.log('服务器启动成功 http://127.0.0.1:3000/download');
    console.log('服务器启动成功 http://127.0.0.1:3000/json');
    console.log('服务器启动成功 http://127.0.0.1:3000/redirect');


});

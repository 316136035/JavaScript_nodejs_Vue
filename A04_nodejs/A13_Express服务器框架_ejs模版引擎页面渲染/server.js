const express = require('express');//引入模块 服务器模块
const ejs = require('ejs');//引入ejs视图引擎
const path = require('path');
const server = express();//创建服务器
//use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname + '/public'));
server.set('view engine', 'ejs');//服务设置的视图引擎是 ejs
server.set('views', path.join(__dirname, '/views'));


server.get('/', (req, res) => {//get方法用来处理get请求
  res.send('hello world');//发送响应
});
//监听端口
server.listen(3000, `127.0.0.1`, () => {
  console.log('服务器启动成功..http://127.0.0.1:3000',)
})




// 引入express服务器框架
const express = require('express');
//获取服务器实例
const server = express();
 
// 全局中间件（每次请求都会执行这个函数）
function global_middleware(req, res,next) {
  console.log('全局中间件',req.ip)
  next();//放行
   
}
//服务器实例使用中间件
server.use( global_middleware);
// 路由
server.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});
// 路由
server.all('*', (req, res) => {
  res.send ('*')

});
// 监听端口
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器启动成功.. http://127.0.0.1:3000/home');
  console.log('服务器启动成功.. http://127.0.0.1:3000/*****');




});
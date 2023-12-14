// 引入express服务器框架
const express = require('express');
//获取服务器实例
const server = express();
// 定义中间件
function routing_middleware(req, res,next){
let {code} = req.query;
// 验证code
if(code == '8888'){
  next();
}else{
  res.send('请先登录');
 
}
}
//普通路由
server.get('/login', (req, res) => { 
  res.send ('login')
})
// 中间件路由
server.get('/home',routing_middleware, (req, res) => { 
  res.send ('home')
})
// 中间件路由
server.get('/register',routing_middleware, (req, res) => {
  res.send ('register')
 })
 // 监听端口
server.listen(3000,"127.0.0.1", () => { 
  console.log('服务器启动成功..http://127.0.0.1:3000/home?code=8888',) 
  console.log('服务器启动成功..http://127.0.0.1:3000/register?code=8888',) 
})

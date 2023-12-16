//引入express服务器框架
const express= require('express');
//创建服务器
const server= express();
//use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname+'/public'));
//引入get路由模块
const get_routing=require('./routes/routing路由/get_routing.js');
server.use(get_routing);//使用get路由模块
//引入post路由模块
const post_routing=require('./routes/routing路由/post_routing.js');
server.use(post_routing);//使用post路由模块
//监听端口
server.listen(3000,`127.0.0.1`,()=>{
  console.log(`服务器启动成功 http://127.0.0.1:3000`);

})
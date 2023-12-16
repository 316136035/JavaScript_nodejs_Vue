const express= require('express');
const server= express();
//use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname+'/public'));

const get_routing=require('./routes/routing路由/get_routing.js');
server.use(get_routing);
const post_routing=require('./routes/routing路由/post_routing.js');
server.use(post_routing);
server.listen(3000,`127.0.0.1`,()=>{
  console.log(`服务器启动成功 http://127.0.0.1:3000`);

})
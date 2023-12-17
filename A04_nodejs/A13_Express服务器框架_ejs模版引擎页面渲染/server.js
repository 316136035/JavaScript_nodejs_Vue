const express = require('express');//引入模块 服务器模块
const path = require('path');//导入path模块 （nodejs只带不用安装）
const server = express();//创建服务器
//use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname + '/public'));
server.set('view engine', 'ejs');//服务设置的视图引擎是 ejs（确保安装了ejs视图引擎）
//设置应用程序的视图引擎路径。
server.set('views', path.resolve(__dirname + '/public/views'));
server.get('/home', (req, res) => {//get方法用来处理get请求
  const arr = ['A', 'B', 'C', 'D', 'E'];
  //res.render('模版名称：home.ejs',{变量名:数组arr});
  res.render('home', { arr: arr });//渲染一个视图
});
//监听端口
server.listen(3000, `127.0.0.1`, () => {
  console.log('服务器启动成功..http://127.0.0.1:3000/home',)
})




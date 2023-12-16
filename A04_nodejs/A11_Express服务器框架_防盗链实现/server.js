// 引入express模块
const e = require('express');
const express = require('express');
// 创建服务器
const server = express();

//use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname + '/public'));
// 全局中间件（每次请求都会执行这个函数）
server.use(global_middleware);

function global_middleware(req, res, next) {
  // 获取referer参数
  let referer = req.get('referer');
  // 构造一个新的URL对象
  const newreferer = new URL(referer, 'http://127.0.0.1:3000');
  // 判断referer是否是127.0.0.1
  if (newreferer.hostname !== '127.0.0.1') {
    res.status(404).send('出错.....');
    return;// 退出函数
 }
  res.status(200)// 响应状态码
  next();// 继续执行下一个中间件（放行）
}

// server.get('/', (req, res) => {
//     // 向客户端发送数据
//     res.send('Hello World');
// });
// 监听端口
server.listen(3000, `127.0.0.1`, () => {
  console.log(`服务器启动成功 http://127.0.0.1:3000`);

  console.log(`服务器启动成功 http://localhost:3000`);
});

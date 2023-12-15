// 引入express模块
const express = require('express');
// 引入body-parser模块（用于解释POST请求中的请求体）
const body_parser = require('body-parser');
// 创建服务器
const server = express();

// 引入body-parser模块（用于解释POST请求中的请求体为querystring）
const urlencoded = body_parser.urlencoded({ extended: false });
// 引入body-parser模块（用于解释POST请求中的请求体为json）
const json = body_parser.urlencoded({ extended: true });

// //use调用静态资源中间件(会自动匹配public目录下的文件并自动匹配响应类型)
server.use(express.static(__dirname + '/public'));
//路由
server.get('/', (req, res) => {
  console.log(__dirname + '/public');
  res.send();//发送响应
})
// 路由
server.post('/register', urlencoded, (req, res) => {
  let { username, password } = req.body; // 获取请求体中的数据，并进行解构赋值
  if (username === 'admin' && password === 'admin') {
    res.send('登录成功');
  } else {
    res.send('登录失败');
  }
})


// 监听端口
server.listen(3000, '127.0.0.1', () => {
  console.log(`服务器启动成功 http://127.0.0.1:3000/index.html`);
});
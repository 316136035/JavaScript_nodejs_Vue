// 引入Express模块
const express = require('express');
const bodyParser = require('body-parser'); // 用于解析请求体
// const cors = require('cors'); // 用于处理跨域问题（如果需要的话）

// 创建Express应用实例
const app = express();

// 使用中间件
app.use(bodyParser.json()); // 解析JSON格式的请求体
// app.use(cors()); // 允许所有来源的跨域请求（在生产环境中应更精确地配置）

// 定义路由
app.get('/', (req, res) => {
  res.send('Hello World! This is your Express server running on port 3001.');
});

app.get('/api/data', (req, res) => {
  // 示例数据，实际应用中可能从数据库或其他服务获取
  const data = { message: 'Some data from API' };
  res.json(data);
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error Occurred!');
});

// 设置监听端口为3001
app.listen(3001, () => {
  console.log('Express server is running at http://localhost:3001');
});
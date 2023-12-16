//引入express服务器框架
const express = require('express');
//引入路由器对象
const postRouter = express.Router();
//post请求路由
postRouter.post('/text', (req, res) => {
  res.send('post-text');
});
module.exports = postRouter;//导出路由器对象
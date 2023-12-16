//引入express服务器框架
const express = require('express');
//引入路由模块对象
const getRouter = express.Router();
//get请求路由
getRouter.get('/text', (req, res) => {
 res.send('get-text');
});
//get请求路由
getRouter.get('/json', (req, res) => {
  res.send('get-json');
});
module.exports = getRouter;//导出路由对象
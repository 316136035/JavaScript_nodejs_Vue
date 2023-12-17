var express = require('express');//引入express模块 服务器框架
var router = express.Router();//获取路由实例对象

/* 用户路由. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 暴露路由模块
module.exports = router;

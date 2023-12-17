var express = require('express');//引入express模块 服务器框架
var router = express.Router(); //获取路由实例对象

/* 主页路由*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//
});
// 暴露路由模块
module.exports = router;

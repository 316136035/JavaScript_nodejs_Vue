var express = require('express');//引入express服务器框架
var router = express.Router();//引入路由模块

// get路由规则
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

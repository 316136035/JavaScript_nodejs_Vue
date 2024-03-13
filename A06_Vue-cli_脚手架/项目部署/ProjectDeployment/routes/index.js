var express = require('express');//引入express模块 （服务器框架）
var router = express.Router();//引入路由模块




/* 主页面的路由 */
router.get('/', function (req, res, next) {
  //渲染页面模版引擎目录中的（index页面，传参）
  res.render('index', { title: '主页面' });
});


//路由模块暴露
module.exports = router;
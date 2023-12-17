var express = require('express');//引入express模块 服务器框架
var router = express.Router(); //获取路由实例对象

/* 主页路由*/
router.get('/', function(req, res, next) {
  const str ='淘神价';
   //res.render('模版名称：index.ejs',{变量名:数组arr});
   //模版名称在views目录中
  res.render('index', { title: str});
});
// 暴露路由模块
module.exports = router;

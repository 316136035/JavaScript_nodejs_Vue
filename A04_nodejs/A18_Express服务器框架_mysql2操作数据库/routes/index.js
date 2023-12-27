var express = require('express');//引入express服务器框架
var router = express.Router();//引入路由模块
var pool = require('../mysql/mysql2_pool');//引入数据库链接池

/* get路由*/
router.get('/', function(req, res, next) {
  res.render('index', { title: '插入数据页面' });
});
/* post路由*/ 
router.post('/insert', function(req, res, next) {
  //获取表单数据并赋值给arr数组
let arr=[req.body.username,req.body.password]
  //操作数据库插入数据
 pool.query("INSERT INTO `nodejs`.`user` (`id`, `username`, `password`,`time`) VALUES (NULL,  ?, ?,CURRENT_TIMESTAMP)", arr,function(error, results){
    if(error){
      console.log(error);//异常处理
    }else{
      console.log( results)//打印结果
    }
  })

})
//暴露路由模块
module.exports = router;

var express = require('express');//引入express模块 （服务器框架）
var router = express.Router();//引入路由模块
var path = require('path');//引入path模块_路径操作
const low = require('lowdb');// 引入lowdb(Json文件操作)
const FileSync = require('lowdb/adapters/FileSync');// 引入文件存储模块
const adapter = new FileSync(__dirname + '/../public/db.json')// 创建数据存储实例
var shortid = require('shortid');//引入shortid模块 （生成随数）
//新的 lowdb 数据库实例（db）。
const db = low(adapter)




/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', { title: '主页面' });

});


router.post('/add', function (req, res, next) {
  let str = shortid.generate();//生成短唯一标识符
  db.get('posts').unshift(
    { id: str, ...req.body }
  ).write();


  res.render('message', { title: '信息页面',message:'添加成功',"url":'/show'} );
});



router.get('/show', function (req, res, next) {
  let arr= db.get('posts').value();

  console.log( arr);
   res.render('show', { title:'信息页面',arr:arr});
});

module.exports = router;

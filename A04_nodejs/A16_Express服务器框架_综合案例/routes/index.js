var express = require('express');//引入express模块 （服务器框架）
var router = express.Router();//引入路由模块
var path = require('path');//引入path模块_路径操作
const low = require('lowdb');// 引入lowdb(Json文件操作)
const FileSync = require('lowdb/adapters/FileSync');// 引入文件存储模块
const adapter = new FileSync(__dirname + '/../public/db.json')// 创建数据存储实例
var shortid = require('shortid');//引入shortid模块 （生成随数）
const { log } = require('console');
//新的 lowdb 数据库实例（db）。
const db = low(adapter)

/* 主页面的路由 */
router.get('/', function (req, res, next) {
  //渲染页面模版引擎目录中的（index页面，传参）
  res.render('index', { title: '主页面' });
});

/* 添加信息的路由 */
router.post('/add', function (req, res, next) {
  let str = shortid.generate();//生成短唯一标识符
  //在json文件中添加数据
  db.get('posts').unshift(
    //id值, req.body获取表单数据对象再参数展开 
    { id: str, ...req.body }
  ).write();
    //渲染页面模版引擎目录中的（message页面，传参）
  res.render('message', { title: '信息页面', message: '添加成功', "url": '/show' });
});

/* 显示信息的路由 */
router.get('/show', function (req, res, next) {
  //获取数据
  let arr = db.get('posts').value();
   //渲染页面模版引擎目录中的（message页面，传参）
  res.render('show', { title: '信息页面', arr: arr });

});

//删除信息的路由
router.get('/delete/:id', function (req, res, next) {
  let id = req.params.id
  //删除数据(会删除所有id为0的数据)返回的是删除的个数
  db.get('posts')
    .remove({ id: id })
    .write();
  let arr = db.get('posts').value();
   //渲染页面模版引擎目录中的（message页面，传参）
  res.render('show', { title: '信息页面', arr: arr });
});

//路由模块暴露
module.exports = router;

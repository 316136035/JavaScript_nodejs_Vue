//app.js是服务器主入口
var createError = require('http-errors');//引入http-errors错误模块
var express = require('express');//引入express模块 服务器框架
var path = require('path');//path模块_路径操作
var cookieParser = require('cookie-parser');//Cookie模块
var logger = require('morgan');//日志信息模块
var indexRouter = require('./routes/index');//引入本地路由模块
var usersRouter = require('./routes/users');//引入本地路由模块
var app = express();//创建服务器实例
app.set('views', path.join(__dirname, 'views'));//设置应用程序的视图目录路径。
app.set('view engine', 'ejs');//服务设置的视图引擎是 ejs
app.use(logger('dev'));// Express中间件，它用于将请求日志记录到控制台。
app.use(express.json());//使用中间件解析json请求体
app.use(express.urlencoded({ extended: false }));//使用中间件解析url编码请求体
app.use(cookieParser());//使用中间件解析cookie请求体
//use调用静态资源中间件(设置静态资源的视图目录路径)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);//使用本地路由模块（可定义前序/）
app.use('/users', usersRouter);//使用本地路由模块（可定义/user/）
//错误处理中间件
app.use(function(req, res, next) {
  next(createError(404));
});

///*捕获错误*/
app.use(function(err, req, res, next) {
  //设置错误状态码
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
//渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});
//导出服务器实例
module.exports = app;

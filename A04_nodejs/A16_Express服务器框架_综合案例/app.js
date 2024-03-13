var createError = require('http-errors');// 异常处理
var express = require('express');// web框架
var path = require('path');// 文件路径
var cookieParser = require('cookie-parser');// cookie
var logger = require('morgan');// 日志
var indexRouter = require('./routes/index');// 路由
var usersRouter = require('./routes/users');// 用户路由
const { log } = require('console');// 日志

var app = express();// 应用web框架

// view engine setup
app.set('views', path.join(__dirname, 'views'));// 设置视图
app.set('view engine', 'ejs');// 设置视图引擎

app.use(logger('dev'));// 应用日志
app.use(express.json());// 应用解析json
app.use(express.urlencoded({ extended: false }));// 使用url编码 解析post请求体
app.use(cookieParser());// cookie
app.use(express.static(path.join(__dirname, 'public')));// 静态资源
console.log(__dirname);

app.use('/', indexRouter);// 路由
app.use('/users', usersRouter);// 用户路由

//当请求路径不存在时，调用next函数传递一个包含状态码404的错误对象，使应用程序继续执行其他中间件或渲染错误页面。
app.use(function(req, res, next) {
  next(createError(404));
});

// 函数是Express框架中的一个中间件，用于处理应用程序中的错误。当发生错误时，它会将错误信息设置为本地变量，并根据当前环境提供错误对象。然后，它设置HTTP响应状态码，并渲染一个错误页面。
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出服务器对象
module.exports = app;

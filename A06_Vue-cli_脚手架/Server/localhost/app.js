var createError = require('http-errors');//引入错误信息模块
var express = require('express');//引入express框架
var path = require('path');//引入path路劲操作
var cookieParser = require('cookie-parser');//引入cookies 模块
var logger = require('morgan');//引入日志模块

var indexRouter = require('./routes/index');//引入路由模块
var usersRouter = require('./routes/users');//引入路由模块

var app = express();//初始化express框架
// 启动服务器并监听指定端口
app.listen(5000, () => {
  console.log('服务器启动成功 http://localhost:5000');
});

app.set('views', path.join(__dirname, 'views'));//指定视图文件所在的目录路径
app.set('view engine', 'ejs');//指定使用的视图引擎类型

app.use(logger('dev'));//使用日志记录器
app.use(express.json());//使用json解析
app.use(express.urlencoded({ extended: false }));//使用url编码
app.use(cookieParser());//使用cookies解析
app.use(express.static(path.join(__dirname, 'public')));//设置为静态文件夹


app.use('/', indexRouter);//使用路由模块
app.use('/users', usersRouter);;//使用路由模块

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

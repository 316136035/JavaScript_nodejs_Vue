var createError = require('http-errors');//引入错误信息模块
var express = require('express');//引入express框架
var path = require('path');//引入path路径操作
var cookieParser = require('cookie-parser');////引入cookies 模块
//引入connect-history-api-fallback（使用浏览器的history模式(地址栏中没有“#” 打包后面会出现404，服务器中的引入并应用 npm i connect-history-api-fallback 这个插件)）
var connect = require('connect-history-api-fallback'); 
var indexRouter = require('./routes/index');//引入路由模块
var app = express();//初始化express框架
app.use(connect());//使用connect-history-api-fallback
app.use(express.json());//使用json模块
app.use(express.urlencoded({ extended: false }));//使用url编码模块
app.use(cookieParser());//使用cookie模块
app.use(express.static(path.join(__dirname, 'public')));//使用静态文件模块

app.use('/', indexRouter);//使用路由模块


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
	//会生成在dist目录中并把里面的css js 等文件复制到服务器的public目录中


var app = require('../app');//引入本地app模块
var debug = require('debug')('a14-express:server');//引入debug模块（要安装）
var http = require('http');//引入Node.js自带的模块
var port = normalizePort(process.env.PORT || '3000');//从环境中获取端口号并将其存储在Express中
app.set('port', port);//设置应用程序的端口为指定的端口号。
var server = http.createServer(app);//创建服务器
//监听端口
server.listen(port,()=>{
  console.log(`服务器启动成功...` , `http://127.0.0.1:${port}`);
});

server.on('error', onError);//监听错误事件
server.on('listening', onListening);//监听端口



//从环境中获取端口号并将其存储在Express中函数
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    //将参数转为整数，如果转换失败则返回原参数值，因为参数是一个命名管道
    return val;
  }

  if (port >= 0) {
    // 如果参数是一个有效的正整数，则返回该整数值
    return port;
  }

  return false;
}

//监听错误事件
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


//1.当服务器开始监听连接时被调用。
//2.它获取服务器地址信息并根据地址类型显示是通过管道还是端口进行连接。
//3.最后，它使用调试信息打印出正在监听的连接方式。
function onListening() {
  var addr = server.address();//获取服务器地址信息
  var bind = typeof addr === 'string' 
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

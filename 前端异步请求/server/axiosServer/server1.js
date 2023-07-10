//安装express服务器  命令：npm install express
//安装自动刷新服务器的工具， 命令： npm i -g nodemon   
//启动服务器 nodemon.server.js

//1.导入express包
const express = require("express");



//2.创建web服务器
const app = express();
//读取vue打包多的项目，
// app.use(express.static(__dirname+'/static'))


// get请求，post请求同理
app.all('/axios', (request, response) => {  // res 是成功后的回调函数
  console.log("请求方式：",request.method)
  console.log("请求Url参数：",request.query)
  console.log("请求头参数：",request.headers)

  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  setTimeout(() => {
    response.send("请求成功...")
  }, 1000);
 
})

//3.使用服务器名.listen()方法启动服务器
app.listen(80, () => {
  console.log("服务器启动于：http://127.0.0.1:80");
})

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
app.get('/serverget', (request, response) => {  // res 是成功后的回调函数
  console.log(request.query)
  console.log(request.headers)
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  response.send("get请求http://127.0.0.1:80/serverget"
  )
})

// get请求，post请求同理
app.post('/servepost', (request, response) => {  // res 是成功后的回调函数
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')

  console.log(request.body)
  console.log(request.headers)
  console.log(request.method)
  console.log("cookies:", request.cookies)
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send("post请求http://127.0.0.1:80/serverpost"

  )
})


// all接受全部请求，
app.all('/serveallJson', (request, response) => {  // res 是成功后的回调函数
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  //创建对象
  const data = {
    name: "周伟彬.... "
  }
  //对象转json字符串
  console.log('对象转json字符串:', JSON.stringify(data))
  response.send(JSON.stringify(data))


})

// get请求，post请求同理
app.get('/serversetTimeout', (request, response) => {  // res 是成功后的回调函数
  console.log(request.query)
  console.log(request.headers)
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  //服务器设置延时响应3秒
  setTimeout(() => {
    response.send("服务器设置延时响应3秒")
  }, 3000)

})


// jquery发送json  get请求，post请求同理
app.get('/jquery', (request, response) => {  // res 是成功后的回调函数
  console.log(request.query)
  console.log(request.headers)
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  const data = { name: "jquery请求get" }
  response.send(JSON.stringify(data))

})


// jquery发送json  get请求，post请求同理
app.post('/jquery', (request, response) => {  // res 是成功后的回调函数
  console.log(request.query)
  console.log(request.headers)
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  const data = { name: "jquery请求post" }
  response.send(JSON.stringify(data))


})


// jquery发送json  get请求，post请求同理
app.get('/jqueryjson', (request, response) => {  // res 是成功后的回调函数
  //解决跨越问题
  response.setHeader('Access-Control-Allow-Origin', '*')
  //解决不安全问题
  response.setHeader('Access-Control-A1low-Headers', '*')
  const data = { name: "jqueryjson" }
  console.log(request.query)
  console.log(request.headers)
  response.send(JSON.stringify(data))
})


// axios 接受全部请求，post请求同理
app.all('/axios', (request, response) => {  // res 是成功后的回调函数
  //  //解决跨越问题
  //  response.setHeader('Access-Control-Allow-Origin', '*')
  //  //解决不安全问题
  //  response.setHeader('Access-Control-A1low-Headers', '*')
 console.log("请求url参数：", request.query)
  console.log("请求头参数：", request.headers)
  response.send(JSON.stringify(request.headers))
})

// fetch接受全部请求，post请求同理
app.all('/axios', (request, response) => {  // res 是成功后的回调函数
  //  //解决跨越问题
  //  response.setHeader('Access-Control-Allow-Origin', '*')
  //  //解决不安全问题
  //  response.setHeader('Access-Control-A1low-Headers', '*')
 console.log("请求url参数：", request.query)
  console.log("请求头参数：", request.headers)
  response.send(JSON.stringify(request.headers))

})


// fetch接受全部请求，post请求同理
app.all('/jqueryacross', (request, response) => {  // res 是成功后的回调函数
  //  //解决跨越问题
  //  response.setHeader('Access-Control-Allow-Origin', '*')
  //  //解决不安全问题
  //  response.setHeader('Access-Control-A1low-Headers', '*')
 console.log("请求url参数：", request.query)
  console.log("请求头参数：", request.headers)
  const data = { name: "jquery请求post" }
  let cd=   request.query.callback     //这个是跨越的标识
 let str=   JSON.stringify(data)
  response.end(`${cd}(${str})`)

})
//3.使用服务器名.listen()方法启动服务器
app.listen(80, () => {
  console.log("服务器启动于：http://127.0.0.1:80");
})

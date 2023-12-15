// 引入express服务器框架
const express = require('express');
// 引入json文件
const jsonObject = require(__dirname+'/publi/A03_参数路由params.json');

// 创建服务器
const server = express();
// 路由规则（:id占位符 可以有多个占位符）
server.get('/user/:id.html', (req, res) => {
  let paramsobject = req.params;//获取参数对象{ id: '1' }
  let { id } = paramsobject;//对象_解构 获取id参数
  let { persons } = jsonObject;//对象_解构 获取persons参数
  //find方法还可以用于遍历对象数组  返回布尔值 布尔值是符合条件的第一个的对象
  let person = persons.find((item) => {
    if (item.id == Number(id)) {
      return true;
    }
  })
  res.send(person);//渲染页面

})
// 监听端口
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器启动成功')
  console.log(`路由参数获取；'http://127.0.0.1:3000/user/1.html'`)
  console.log(`路由参数获取；'http://127.0.0.1:3000/user/2.html'`)
  console.log(`路由参数获取；'http://127.0.0.1:3000/user/3.html'`)
})




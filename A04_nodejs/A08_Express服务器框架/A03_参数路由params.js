// 路由参数params
const express = require('./express');
const server = express();
server.get(':id', (req, res) => {
  let { id } = req.params;
  console.log(req.params)
  res.send('user')
})

server.listen(3000, '12070.0.1', () => {
  console.log('服务器启动成功')
})




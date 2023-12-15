
const express = require('express');
const server=express();
server.use(express.static(__dirname+'/public'));

server.get('/',(req,res)=>{
  console.log(__dirname+'/public');
  
  
res.send();

})


server.listen(3000,'127.0.0.1',()=>{
  console.log(`服务器启动成功 http://127.0.0.1:3000/index.html`);
});
const  express=require ('express');
const server=express();
//静态资源中间件(会自动匹配public目录下的index.html文件并自动匹配响应类型)
server.use(express.static(__dirname+'/public'));
server.get('/',(req,res)=>{
    res.send("响应成功..")
});
server.listen(3000,`127.0.0.1`,()=>{
  console.log('服务器启动成功..http://127.0.0.1:3000/index.html',) 
})

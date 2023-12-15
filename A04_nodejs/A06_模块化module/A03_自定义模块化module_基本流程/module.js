/***/
function require(file) {
   //1.相对路径转成绝对路径
   const abspath = path.resolve(_dirname, file)
   //2.缓存检测
   if (caches[abspath]) {
      return caches[abspath]
   }
   //3.读取文件代码
   let code = fs.readFileSync(abspath).toString()
   //4.包裹为函数，然后执行
   let module = {};
   let exports = module.exports = {};
   (function (exports, require, module, __filename, __dirname) {
      //创建-对象
      const user = { name: '周伟彬' }
      //暴露对象
      module.exports = { user: user }
      //打印暴露对象
      //console.log(arguments.callee.toString())
      //调用本方法
   })(exports, require, module, __filename, __dirname)
   //5.缓存结果
   caches[abspath] = module.exports;
   //6.  返回module.exports的值
   return module.exports;






}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  //开启跨域代理服务器（方式二 可以处理多个请求地址）
  devServer: {
    //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
    proxy: {
      // 请求地址http://localhost:9090/getList1为找到这个代理 
      // target 真实服务器地址
      //pathRewrite 正则表达式去除/getList1
      // ws:true 支持wedsocket
      // changeOrigin:true
      "/axios": {
        target: "http://127.0.0.1:80/axios",
        pathRewrite: { "^/axios": "" },   //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          Origin: `https://item.jd.com`, //
          Referer: `https://item.jd.com/`,
          Host: "api.m.jd.com",
          Origin: `https://item.jd.com`,
          Referer: `https"://item.jd.com/`,
        
        },
      
      },
    }
  }
  })
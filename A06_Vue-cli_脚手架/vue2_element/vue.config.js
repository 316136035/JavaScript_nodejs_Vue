//暴露配置
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    //subpage: 'src/subpage/main.js'
  },
  lintOnSave: false,//关闭语法检查

}
// //配置代理服务器
// const { defineConfig } = require('@vue/cli-service')
// //配置跨域代理服务器（方案一）
// module.exports = defineConfig({
//  transpileDependencies: true,//自动编译

//   //配置代理
//   devServer: {
//     //代理服务器请求真实服务器(vue组件中请求为 url: "http://localhost:8080/home",)
//     proxy: 'http://127.0.0.1:4000'
//   }
// })


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  //开启跨域代理服务器（方式二 可以处理多个请求地址）
  devServer: {
    //代理服务器请求真实服务器地址(实现请求为http://localhost:9090/user/selectUserList)
    //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
    proxy: {
      "/GetAll": {
        target: "http://127.0.0.1:4000",//代理服务器请求真实服务器地址
        pathRewrite: { "^/GetAll": "" }, //正则表达式重写路径 
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          Origin: `https://item.jd.com`,   //
          Referer: `https"://item.jd.com/`,
          Referer: `https"://item.jd.com/`,
          Host: "api.m.jd.com",
          Cookie: `__jdu=16822235340841718632670; `
        }
      },
    }
  }
})


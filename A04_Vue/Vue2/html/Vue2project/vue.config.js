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
      // title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  }
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  //  //开启代理服务器（方式一,只能处理一个请求地址）
  //  devServer: {
  // //   //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
  //   proxy: 'http://item.jd.com'
  // }

  //开启跨域代理服务器（方式二 可以处理多个请求地址）
  devServer: {
    //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
    proxy: {
      // 请求地址http://localhost:9090/getList1为找到这个代理 
      // target 真实服务器地址
      //pathRewrite 正则表达式去除/getList1
      // ws:true 支持wedsocket
      // changeOrigin:true
      "/getname": {
        target: "https://api.m.jd.com",
       
        pathRewrite: { "^/getname": "" },   //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          Origin: `https://item.jd.com`,   //
          Referer: `https://item.jd.com/`,
          Host: "api.m.jd.com",
          Connection: "keep-alive",
          accept: `application/json, text/javascript, */*; q=0.01`,
          "sec-ch-ua-platform": "Windows",
          Origin: `https://item.jd.com`,
          Referer: `https"://item.jd.com/`,
          Cookie: ` __jdu=16822235340841718632670;  areaId=19; ipLoc-djd=19-1601-50258-129167; pinId=ITwiJ7Fu7PDbXrUjzBWQTQ; pin=%E4%BC%9F%E5%BD%AC672; unick=%E4%BC%9F%E5%BD%AC672; _tp=hxLYH8HQwR055cBkwF6z4U%2FRcQpTiFWe1NPQJF%2F1Sv0%3D; _pst=%E4%BC%9F%E5%BD%AC672; user-key=a1242e34-0238-46b2-a7d1-6335f5ddd179; PCSYCityID=CN_440000_440100_0; TrackID=1C10aCHaq3NUcWZKJg24Nw80kSBWA7cVuj-IwmocOJnHuhCubKiXxoOgSA1VILg_W5y4hvfTBX4mIYDZrfbDso9KKIfjpQL06qR_1eq5RHls; jsavif=1; mba_muid=16822235340841718632670; 3AB9D23F7A4B3C9B=Z5BUAUO3JOTLATWUIMQY75BKHXLZZRXLYNFZAIUYT7F452XOIXNZFW2QMIDXHS7L4T4B7HZZFUOU3VCE2MGPZXGLOA; unpl=JF8EALNnNSttCh8DUk8DSRFHG1UHWwhYQh9TOjMMUV0KTVMEGwIfEBh7XlVdXxRKEh9sZRRUWVNLUQ4YAisSEXteU11bD00VB2xXVgQFDQ8WUUtBSUt-S1xTV1wOSRAAa2cGZG1bS2QFGjIbFRlIXldcWQpOFgpqZwNUVF9JVwIdAysTIExtZG5bDU8WCl9mNVVtGh8IAR4HGBcWBl1TV14LSBUHbWIEXVhYTVQMHAAYFRZKbVVuXg; __jdv=76161171|baidu-search|t_262767352_baidusearch|cpc|106807362512_0_ceffe0c2fa9b4da89ade841c76011539|1682234061494; shshshfp=105841f8ae2178db9079374b85729785; __jda=122270672.16822235340841718632670.1682223534.1682230294.1682232830.4; __jdc=122270672; wq_addr=0%7C19_1601_50258_129167%7C%7C%7C%2C; mpClientId=jsbm; linkedColor=1; lite_regionAddress=19%2C1601%2C50258%2C129167; token=cd93ef347292b667538131f32e579461,2,934575; __tk=kzIyjvjzkstxIvfoIsa0JUexIzBpJijDlstzlsa1kpt,2,934575; 3AB9D23F7A4B3CSS=jdd03Z5BUAUO3JOTLATWUIMQY75BKHXLZZRXLYNFZAIUYT7F452XOIXNZFW2QMIDXHS7L4T4B7HZZFUOU3VCE2MGPZXGLOAAAAAMHVUJXWBIAAAAACUURTNUPS3GVVYX; _gia_d=1; wq_logid=1682235953.1967149590; shshshsID=bb5219e76895b4c4c5fe8892f4500012_108_1682235986887; __jdb=122270672.34.16822235340841718632670|4.1682232830`
        }
      },
    }
  }
})

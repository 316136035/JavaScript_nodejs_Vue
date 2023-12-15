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
  //开启跨域代理服务器（方式二 可以处理多个请求地址）
  devServer: {
    //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
    proxy: {
      // 请求地址http://localhost:9090/getList1为找到这个代理 
      // target 真实服务器地址
      //pathRewrite 正则表达式去除/getList1
      // ws:true 支持wedsocket
      // changeOrigin:true

      //通过pid获取店铺id个供应商id
      "/get_shopId_venderId": {
        target: 'https://chat1.jd.com/', //目标服务器
        pathRewrite: { "^/get_shopId_venderId": "" },
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          Host: 'chat1.jd.com',
          Connection: 'keep-alive',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': "Windows",
          Accept: '*/*',
          'Sec-Fetch-Site': 'same-site',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Dest': 'script',
          'Referer': 'https://item.jd.com/',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'zh-CN,zh;q=0.9',

        },

      },

      //通过Result_fp_Expand获取token_eid
      "/get_token_eid": {
        target: 'https://gia.jd.com/', //目标服务器
        pathRewrite: { "^/get_token_eid": "" },
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
       
        headers: {
          Host: 'gia.jd.com',
          Connection: 'keep-alive',
          'Content-Length': 8643,
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-platform': "Windows",
          'sec-ch-ua-mobile': '?0',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Accept': '*/*',
          Origin: 'https://item.jd.com',
          'Sec-Fetch-Site': 'same-site',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          Referer: 'https://item.jd.com/',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'zh-CN,zh;q=0.9',
          Cookie: 'shshshfpa=c4cf9ebd-5f9f-2bb2-8ed0-14ec9068a459-1685264770; shshshfpx=c4cf9ebd-5f9f-2bb2-8ed0-14ec9068a459-1685264770; __jdu=16852647705371206454586; areaId=19; pinId=ITwiJ7Fu7PDbXrUjzBWQTQ; _tp=hxLYH8HQwR055cBkwF6z4U%2FRcQpTiFWe1NPQJF%2F1Sv0%3D; _pst=%E4%BC%9F%E5%BD%AC672; user-key=634b6222-00a8-4f14-8e8c-4830b65c938d; ipLoc-djd=19-1601-50259-50426.1471775729; ipLocation=%u5e7f%u4e1c; unpl=JF8EAK1nNSttXU5WABNWThpCQwhWWw9dGx5RbzNRVg4LGVVWHlFJE0d7XlVdXxRKEx9sbhRUW1NLUA4YBisSEHtdVV9cCUMfAmhiNWRdWUpVAx8HGRARe15Ublw4SxAKa2QCUVteSlAHHQIYExdOWVFaVA97FjNvbwJkWF9CVA0TASsiEXtcZF9tXiUXAm5mBFVdWElXSBsFEhYTTFhSWFwMSREDbGYCUVldT10CKwMrEQ; qid_uid=e67db62f-012c-4dcc-b14e-c192bdeccb4a; qid_fs=1685265327582; __jdv=122270672|kong|t_1000099064_|jingfen|44349ed9c9d34cda8c1ee3bbc0b4bc0f|1685265328328; mba_muid=16852647705371206454586; pin=%E4%BC%9F%E5%BD%AC672; unick=%E4%BC%9F%E5%BD%AC672; cn=5; qid_ls=1685265327589; qid_ts=1685275585211; qid_vis=2; PosAuth=N8ErTNIUMw7nFdNCbMSlU5GFJg4skt0Lj9ytFNRPrKfQnr1167nqY9KoDJ741J6c5kKvyHLQI0NQ/hCzhp0//l5je0b8g1ZKROYe2gMQkm/9sbxkTNhVJcvbH+PXdT38E7fWH+4x2VeQo8yk+Ua91MV0AwIVDpCELXbWtHwsG6zZWZoOlUwgBFG/xKQ76AKFiWRFek7tLOLyd7RJiYU5IxmRB+4sX4Vm5wAwDg7hGK8UVDXsnNtqNbtpCZdm9xzhf99YJ7RpWi7zndcyZalyZDZB9e54m0rfQSwv4VWbAIio9kmt43sEdk/4MnySxq50; x-rp-evtoken=N-nAb5Oj6OS1u8hkvixIgCoEVuKzpefKJdYd07v0RJM4XFwuT65KEP4Ja3DHSBA5p-DsTI4Ldyo28at9c6YZbk0UDSW12ROlVeEHpT-CT6oLtFKxrqFdAvHDiSEfqjwtZj3uTAOhFlFkejWuu67wsSfKFPGgkq0nXhuZQ7il1I97EV8m_DN1tU9XVGriCYK6IzwCB60RU-7oxEEcklbX85DhWExDFc20nV0Sl9yg8z8%3D; wxa_level=1; cid=9; webp=1; visitkey=141795025976825; equipmentId=L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQ; deviceVersion=111.0.0.0; deviceName=Chrome; sc_width=3840; TrackerID=yVHerEsdeNbzNXOxMTBNN5aDpOsKarNIUC3CXwA-o4LKDElOYcvv7MUnZJaMmAU4f2FzwHzGJvC57a8qjnPNeYxvPOG2SGMb1Tq4Q_y_F74; pt_key=AAJkdE8XADDICgYjefyBxwmISocZtq1ZfyDWIGES6ocH_GaXp9RsSu_IKS7X0mraSmCrhnfceqg; pt_pin=%E4%BC%9F%E5%BD%AC672; pt_token=lqk9mb6c; pwdt_id=%E4%BC%9F%E5%BD%AC672; sfstoken=tk01mb4861beea8sMSsxKzFuVjlwNMKP3CmXdFD0cY89wfodGhK59DBzyo4BI1F0k0hPB0xCNMldWrCPIrIubss8GTGB; retina=0; jxsid_s_u=https%3A//wq.jd.com/item/view; shshshfpb=deucOczOsXBDOPX5oK1dWaQ; jxsid=16853443615949841995; jxsid_s_t=1685344361670; deviceOS=; deviceOSVersion=; fingerprint=84c13cbb52f435c4a7c596b9f1583be8; __wga=1685344791084.1685343997820.1685343997820.1685343997820.11.1; PPRD_P=UUID.16852647705371206454586-LOGID.1685344791092.736264991; jsavif=1; __jda=122270672.16852647705371206454586.1685264771.1685347793.1685360677.8; 3AB9D23F7A4B3C9B=L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQ; TrackID=1cpsQbyLJ8bSkbz1xB60H17W0hH8Dzyeh8GgL4GwVzWG5VftXR1p1lyNDrB9b1mFqyWry9biokvRhxrhrA0cdrvClQjN7zRdclZcfd-mMKG4; shshshsID=8ee23e797f62a9a4a40a0489fbf2cc71_3_1685360781457; 3AB9D23F7A4B3CSS=jdd03L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQAAAAMIM5QPWPYAAAAADJ5JYVM5ZOFZA4X; __jdb=122270672.12.16852647705371206454586|8.1685360677; token=6d94d1b84d112eb53f508607f0bf3efd,2,936312; __tk=3a582b66df88a8da67586944b30a1702,2,936312'

        },

      },

      //通过token_eid 动态获取加密字符串
      "/get_Dynamic_encrypted_string": {
        target: 'https://cactus.jd.com', //目标服务器
        pathRewrite: { "^/get_Dynamic_encrypted_string": "" },
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          accept: 'application/json',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'zh-CN,zh;q=0.9',
          'cache-control': 'no-cache',
         
          origin: 'https://item.jd.com',
          pragma: 'no-cache',
          referer: 'https://item.jd.com/',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': "Windows",
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'



        },

      },


      "/get_api_m_jd_com": {
        target: 'https://api.m.jd.com/', //目标服务器
        pathRewrite: { "^/get_api_m_jd_com": "" },
        secure: false,           //如果是https接口，需要配置这个参数 
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        headers: {
          'sec-ch-ua': `"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"`,
          accept: 'application/json, text/javascript, */*; q=0.01',
          'x-rp-client': 'h5_1.0.0',
          'sec-ch-ua-mobile': '?0',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': "Windows",
          Origin: 'https://item.jd.com',
          'Sec-Fetch-Site': 'same-site',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          Referer: 'https://item.jd.com/',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'zh-CN,zh;q=0.9',
        },

      },


    }
  }
})

import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
import Vuex from 'vuex'  // 引入vuex
Vue.use(Vuex) //使用Vuex  响应式共享的数据
import axios from "axios"; //引入axios请求
const Request_Algoa = require('./Get_Request_Algo')
// const Result_fp_Expand = require('./Get_Result_fp_Expand')
const Actions = {
    actionsget: {

        //通过pid获取店铺id个供应商id
        get_shopId_venderId(pid) {
            //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
            axios.defaults.withCredentials = true; //配置可以使用cookies请求

            //响应拦截器
            axios.interceptors.response.use(
                //成功
                (response) => {
                    // if(response.data.code==605){
                    //   return Promise.reject(error);
                    // }

                    return response;
                },
                //失败
                (error) => {
                    return Promise.reject(error);
                }
            );
            let url = `/get_shopId_venderId/api/checkChat?callback=jQuery&pid=${pid}&returnCharset=utf-8&_=${new Date().getTime()}`
            const successorailure = axios({
                url: url,
                method: "Get", //请求方式
                timeout: 1000, //超时时间
                responseType: "json", // 请求格式默认值
                responseEncoding: "utf8", // 默认值
                evalScripts: true,
                withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                headers: {


                }


            })
            return successorailure

        },

        //通过浏览器参数（Result_fp_Expand）生成Result参数并获取token_eid
        get_token_eid() {
            // console.log("Request_Algoa==========================================d==================",Request_Algoa.a)
            // console.log("Request_Algoa==========================================n==================",Request_Algoa.d)

            let a = Request_Algoa.a

            let url = `/get_token_eid/jsTk.do`;
            const successorailure = axios({
                url: url,
                params: { a: a },
                method: "post", //请求方式
                timeout: 1000, //超时时间
                responseType: "json", // 请求格式默认值
                responseEncoding: "utf8", // 默认值
                evalScripts: true,
                withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=UTF-8", //hearder 很重要，Content-Type 要写对
                },

                data: {
                    d: Request_Algoa.d,
                }, //请求正文
            })

            return successorailure

        },

        //通过（appId,expandParams,fp,fv,platform,timestamp）动态获取加密字符串
        get_Dynamic_encrypted_string(appId,expandParams,fp,fv,platform,timestamp,version) {
         
            let url = `/get_Dynamic_encrypted_string/request_algo`;
            const successorailure = axios({
                  url:  url ,
                params: {g_ty: 'ajax' },
                method: "post", //请求方式
                timeout: 1000, //超时时间
                responseType: "json", // 请求格式默认值
                responseEncoding: "utf8", // 默认值
                evalScripts: true,
                withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                headers: {
                  //  "content-type": "application/x-www-form-urlencoded;charset=UTF-8", //hearder 很重要，Content-Type 要写对
                  'content-type': 'application/json',
                },

                data: {
                    appId: appId,
                    expandParams: expandParams,
                    fp: fp,
                    fv: fv,   
                    platform: platform,
                    timestamp: timestamp,
                    version: version,

                }, //请求正文
            })

            return successorailure

        },




     

        get_money() {

            //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
            axios.defaults.withCredentials = true; //配置可以使用cookies请求
            //请求拦截器
            axios.interceptors.request.use(
                //成功
                (requestconfig) => {

                    // console.log("请求拦截器-->请求成功")
                    //利用拦截器添加请求配置
                    //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
                    return requestconfig;
                },
                //失败
                (error) => {
                    return Promise.reject(error);
                }
            );
            //响应拦截器
            axios.interceptors.response.use(
                //成功
                (response) => {
                    // if(response.data.code==605){
                    //   return Promise.reject(error);
                    // }

                    return response;
                },
                //失败
                (error) => {
                    return Promise.reject(error);
                }
            );
            // if (i == action.state.ids.length) { i = 0 }
            //    let url = `/get_api_m_jd_com/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1685361620039&body=%7B%22skuId%22%3A4681992%2C%22cat%22%3A%22670%2C729%2C7371%22%2C%22area%22%3A%2219_1601_50259_50426%22%2C%22shopId%22%3A%221000001132%22%2C%22venderId%22%3A1000001132%2C%22paramJson%22%3A%22%7B%5C%22platform2%5C%22%3A%5C%22100000000001%5C%22%2C%5C%22specialAttrStr%5C%22%3A%5C%22p0ppppppppp5ppppp1ppppppppp%5C%22%2C%5C%22skuMarkStr%5C%22%3A%5C%2200%5C%22%7D%22%2C%22num%22%3A1%2C%22bbTraffic%22%3A%22%22%7D&h5st=20230529200020079%3B4229007243612280%3Bfb5df%3Btk03wad281cd318npHo8cQHR7z0JgeOVFAVX-qm8qgEZ2dcfrR7MCqcVWvNh0Iy_Zg2lNuoqpLfiFxoOgzG24Wi7yeHn%3B4a39127ff47e103f110e76d7d60253fab391e52d46132039bb03c91a475ba424%3B3.1%3B1685361620079%3B24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e323203b56fa50247cd3dfff2e3c0090d9e75f1a2a5a1734257990f4b369e8c444ad9ea019b181e13645fb8af6c255880ef9b4e13d805738e53efb2d10740e444a121149dd66fb5b9eb2d496406c0a20b0ff5bbb4a4f23826e732c319e9006739b&x-api-eid-token=jdd03L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQAAAAMIM5QPWPYAAAAADJ5JYVM5ZOFZA4X&loginType=3&uuid=122270672.16852647705371206454586.1685264771.1685347793.1685360677.8`;

            let time = new Date().getTime()
            // const jd = { "skuId": action.state.ids[i], "cat": "670,729,7371", "area": "19_1601_50259_50426", "shopId": "0", "venderId": 0, "paramJson": "{\"platform2\":\"100000000001\",\"specialAttrStr\":\"p0ppppppppp5ppppp1ppppppppp\",\"skuMarkStr\":\"00\"}", "num": 1, "bbTraffic": "" }


            let url = `/get_api_m_jd_com/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1685456110845&body=%7B%22skuId%22%3A4681992%2C%22cat%22%3A%22670%2C729%2C7371%22%2C%22area%22%3A%2219_1601_50259_50426%22%2C%22shopId%22%3A%221000001132%22%2C%22venderId%22%3A1000001132%2C%22paramJson%22%3A%22%7B%5C%22platform2%5C%22%3A%5C%22100000000001%5C%22%2C%5C%22specialAttrStr%5C%22%3A%5C%22p0ppppppppp5ppppp1ppppppppp%5C%22%2C%5C%22skuMarkStr%5C%22%3A%5C%2200%5C%22%7D%22%2C%22num%22%3A1%2C%22bbTraffic%22%3A%22%22%7D&h5st=20230530221510874%3B4229007243612280%3Bfb5df%3Btk03wb2e91cbd18nVuEkHm7fognRT8dc-ci5e30iU3_-R8KcdRHMDvccWsnD1loe6CtUshbxzrcDqrx8qFvJWSdV9hE5%3B5afd32d2ee4c44cf9f7418aa8c1a1aa9ed720a254c18e202e19007a939456456%3B3.1%3B1685456110874%3B24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e323203b56fa50247cd3dfff2e3c0090d9e75f1a2a5a1734257990f4b369e8c444ad9ea019b181e13645fb8af6c255880ef9b4e13d805738e53efb2d10740e444a121149dd66fb5b9eb2d496406c0a20b0ff5bbb4a4f23826e732c319e9006739b&x-api-eid-token=jdd03L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQAAAAMINUBL6JAAAAAADG6Y6CUC7LDN4EX&loginType=3&uuid=122270672.16852647705371206454586.1685264771.1685430054.1685451342.15`

            // console.log(action.state.ids[i])
            const successorailure = axios({
                url: url,
                method: "Get", //请求方式
                timeout: 1000, //超时时间
                responseType: "json", // 请求格式默认值
                responseEncoding: "utf8", // 默认值
                evalScripts: true,
                withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
                headers: {
                    'Cookie': `shshshfpa=c4cf9ebd-5f9f-2bb2-8ed0-14ec9068a459-1685264770; shshshfpx=c4cf9ebd-5f9f-2bb2-8ed0-14ec9068a459-1685264770; __jdu=16852647705371206454586; areaId=19; pinId=ITwiJ7Fu7PDbXrUjzBWQTQ; _tp=hxLYH8HQwR055cBkwF6z4U%2FRcQpTiFWe1NPQJF%2F1Sv0%3D; _pst=%E4%BC%9F%E5%BD%AC672; user-key=634b6222-00a8-4f14-8e8c-4830b65c938d; ipLoc-djd=19-1601-50259-50426.1471775729; ipLocation=%u5e7f%u4e1c; qid_uid=e67db62f-012c-4dcc-b14e-c192bdeccb4a; qid_fs=1685265327582; mba_muid=16852647705371206454586; pin=%E4%BC%9F%E5%BD%AC672; unick=%E4%BC%9F%E5%BD%AC672; qid_ls=1685265327589; qid_ts=1685275585211; qid_vis=2; PosAuth=N8ErTNIUMw7nFdNCbMSlU5GFJg4skt0Lj9ytFNRPrKfQnr1167nqY9KoDJ741J6c5kKvyHLQI0NQ/hCzhp0//l5je0b8g1ZKROYe2gMQkm/9sbxkTNhVJcvbH+PXdT38E7fWH+4x2VeQo8yk+Ua91MV0AwIVDpCELXbWtHwsG6zZWZoOlUwgBFG/xKQ76AKFiWRFek7tLOLyd7RJiYU5IxmRB+4sX4Vm5wAwDg7hGK8UVDXsnNtqNbtpCZdm9xzhf99YJ7RpWi7zndcyZalyZDZB9e54m0rfQSwv4VWbAIio9kmt43sEdk/4MnySxq50; jcap_dvzw_fp=CGWMZY-UB5BfF4TSpKCbcqW7tqqE5XPdRK_m-WyjKY-XDO4yu-scsbpgefNgTeR5oSAoP4Zr_1YO2RaAVeCJQw==; cid=9; webp=1; visitkey=141795025976825; equipmentId=L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQ; deviceVersion=111.0.0.0; deviceName=Chrome; sc_width=3840; TrackerID=yVHerEsdeNbzNXOxMTBNN5aDpOsKarNIUC3CXwA-o4LKDElOYcvv7MUnZJaMmAU4f2FzwHzGJvC57a8qjnPNeYxvPOG2SGMb1Tq4Q_y_F74; pt_key=AAJkdE8XADDICgYjefyBxwmISocZtq1ZfyDWIGES6ocH_GaXp9RsSu_IKS7X0mraSmCrhnfceqg; pt_pin=%E4%BC%9F%E5%BD%AC672; pt_token=lqk9mb6c; pwdt_id=%E4%BC%9F%E5%BD%AC672; sfstoken=tk01mb4861beea8sMSsxKzFuVjlwNMKP3CmXdFD0cY89wfodGhK59DBzyo4BI1F0k0hPB0xCNMldWrCPIrIubss8GTGB; whwswswws=; retina=0; shshshfpb=deucOczOsXBDOPX5oK1dWaQ; deviceOS=; deviceOSVersion=; warehistory="4681992,4681992,4681992,4681992,4681992,4681992,"; autoOpenApp_downCloseDate_autoOpenApp_autoPromptly=1685344790900_1; fingerprint=84c13cbb52f435c4a7c596b9f1583be8; __wga=1685344791084.1685343997820.1685343997820.1685343997820.11.1; PPRD_P=UUID.16852647705371206454586-LOGID.1685344791092.736264991; unpl=JF8EAK9nNSttDEMAVksBGkJFGV9SWwpfSR8EbGUCUFtRTQZVGAQaEkB7XlVdXxRKEx9tZhRUXlNIUg4ZBSsSF3teVVxcC08TB2tiNWRaWEIZRElPKxEQe1xkXloBTxQEamEDVVlaTVQGGgUeFhVPVFNuXDhMFwpfZwRVXF1JVwEbCh8bIHtcZF9tCXtBbW9mBFVcWUtRBBhPGxUZT15TW1sOShMBaWcGVVpdT1EBEgUrEyBI; __jdv=122270672|kong|t_2030255554_|tuiguang|e9eba20adc374ff3962365787ca2701a|1685430053964; jsavif=1; __jda=122270672.16852647705371206454586.1685264771.1685430054.1685451342.15; __jdc=122270672; mpClientId=jsbm; wq_addr=0%7C19_1601_50259_50426%7C%7C%7C; linkedColor=1; lite_regionAddress=19%2C1601%2C50259%2C50426; wlfstk_smdl=maxibf03qty094cu6fb1yzo38m19u7oh; TrackID=1Kh6GPD80xyYh-_4-vH9FsUTaf8HbcIhzT09bpWsaz0awUUvoeIbf1fLHT4e1Rygavw5GAr3G0EvkiTHWXfG7ZDp-2pZzqAkbSfeOWuNAUfA; flash=2_PATK2q5ee_NPn1XU1LhXKCg0xSJlgWm3T-hU171082b9pXoJI5Qid_FPAS9a2nICwjRWGUgWwuRBT3QaGgCdFxr0E_htHUWTtb7IY9dcjej*; ceshi3.com=000; token=f22d1655487670ea8c1dae01cf74e740,3,936363; __tk=VLY3TLe3iLYFVAZHVLVKTcYCiDe2SAqBVcZHiArIVLi,3,936363; 3AB9D23F7A4B3C9B=L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQ; mba_sid=16854549366394399918683385539.1; __jd_ref_cls=LoginDisposition_Go; x-rp-evtoken=N-nAb5Oj6OS1u8hkvixIgCoEVuKzpefKJdYd07v0RJM4XFwuT65KEP4Ja3DHSBA5p-DsTI4Ldyo28at9c6YZbk0UDSW12ROlVeEHpT-CT6pJZ6Ob-oCCk9QEcRBNR5Gi0Jl5njxkLaPOm-_isLe_0xyxbixD6RILgtbH9-s1uJxa_lVn-MmJicr5f1VFnxDhmhWOOODSNfJlkwDZubh1lO92lCa_IdcFQuVJeLF96nY%3D; 3AB9D23F7A4B3CSS=jdd03L46USKOABH656SDHVWIC3B76HF3W4TAIV7QOZ4PIQT7PBI5AEJREKJWUPBROHJTENBJLLCHYDDSSXL5IAJNCYGL2XQAAAAMINTZHXCQAAAAADT5IQRK5ZUA2NMX; _gia_d=1; thor=1B85A6451E309CAFECCADEC9A69954638A53C60BA477A4B896659722935B25A70532678C3ED809AC9F4EB2AD9CB35387F4C6AB4FC3D671D267F3479CAE715E322CF8C8CB70229DC088A4CF997338248725A5C270019DCE6453CF6A978ED4A4B11AB85DD02EFC943CE604CCBD073B68C24552983CB1D47BA8BE298D38E96087F3; shshshsID=e1ca80db3665c000c44956bc47335d96_16_1685455027729; __jdb=122270672.27.16852647705371206454586|15.1685451342`,
                    'x-referer-page': 'https://item.jd.com/4681992.html',

                }


            })

            return successorailure

        }






    }
}
export default {
    Actions
}
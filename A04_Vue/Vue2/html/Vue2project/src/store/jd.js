import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
import Vuex from 'vuex'  // 引入vuex
Vue.use(Vuex) //使用Vuex  响应式共享的数据
import axios from "axios";
axios.defaults.withCredentials = true; //配置可以使用cookies请求

/*创建并暴露京东相关模块**/ 
export default {
    namespaced: true,// 开启命名空间
    //准备actions对象—统一响应组件中用户的动作(后台代码/异步请求)
    actions: {
        /**请求方法（精简的核心文件store，组件传参）*/
        start_request(action, n) {
            console.log("start_request", action.state.jdlist[0])
            let i = 0
            action.state.isconsole = setInterval(() => {
                //const body={"skuId":25897006189,"cat":"670,671,673","area":"19_1601_50258_129167","shopId":"1000350143","venderId":1000350143,"paramJson":"{\"platform2\":\"1\",\"specialAttrStr\":\"p0pppppppppp1ppppppppppppp\",\"skuMarkStr\":\"00\"}","num":1}
                const body = { "skuId": 100046501032, "area": "19_1601_50258_129167" }
                body.skuId = action.state.jdlist[i].id
                //console.log("################id",action.state.jdlist[i].id)
                //转成encode编码
                var str = encodeURI(JSON.stringify(body));
                //需要定时执行的代码
                //const url = `/getname/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1682232859506&body=%7B%22skuId%22%3A25897006189%2C%22cat%22%3A%22670%2C671%2C673%22%2C%22area%22%3A%2219_1601_50258_129167%22%2C%22shopId%22%3A%221000350143%22%2C%22venderId%22%3A1000350143%2C%22paramJson%22%3A%22%7B%5C%22platform2%5C%22%3A%5C%221%5C%22%2C%5C%22specialAttrStr%5C%22%3A%5C%22p0pppppppppp1ppppppppppppp%5C%22%2C%5C%22skuMarkStr%5C%22%3A%5C%2200%5C%22%7D%22%2C%22num%22%3A1%7D&h5st=20230423145419528;3299150847091990;fb5df;tk03w9d031c4918nrCi7N2Rx6lp0vT0szJc6AEzZFxVLTbEC6cwIH_jw10L4Y_JRYy7aMz3Fz3_ujmPuTXYHfRALxZbr;a16e735922233933bd887303662227d70c30619566e8446b6804446799fabc56;3.1;1682232859528;24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e329eb3a1461120861e947ad6af0105620797b7b0e7663a50feb7065467b99dcf38db581c67bb8686408804f718bb63dbe14eaec77d2682f702ad8cedb1ee6acce&x-api-eid-token=jdd03Z5BUAUO3JOTLATWUIMQY75BKHXLZZRXLYNFZAIUYT7F452XOIXNZFW2QMIDXHS7L4T4B7HZZFUOU3VCE2MGPZXGLOAAAAAMHVT3DLDIAAAAAC54PLS4QQM4XEQX&loginType=3&uuid=122270672.16822235340841718632670.1682223534.1682230294.1682232830.4`;
                const url = `/getname/?appid=pc-item-soa&functionId=pc_detailpage_wareBusiness&client=pc&clientVersion=1.0.0&t=1682232859506&body=${str}&h5st=20230423145419528;3299150847091990;fb5df;tk03w9d031c4918nrCi7N2Rx6lp0vT0szJc6AEzZFxVLTbEC6cwIH_jw10L4Y_JRYy7aMz3Fz3_ujmPuTXYHfRALxZbr;a16e735922233933bd887303662227d70c30619566e8446b6804446799fabc56;3.1;1682232859528;24c9ee85e67cf80746dd82817ecbeafc7a829b35c7f446a4c7d476cc9faa1d8834a93323ad7bce9bef1bba682b93d2e329eb3a1461120861e947ad6af0105620797b7b0e7663a50feb7065467b99dcf38db581c67bb8686408804f718bb63dbe14eaec77d2682f702ad8cedb1ee6acce&x-api-eid-token=jdd03Z5BUAUO3JOTLATWUIMQY75BKHXLZZRXLYNFZAIUYT7F452XOIXNZFW2QMIDXHS7L4T4B7HZZFUOU3VCE2MGPZXGLOAAAAAMHVT3DLDIAAAAAC54PLS4QQM4XEQX&loginType=3&uuid=122270672.16822235340841718632670.1682223534.1682230294.1682232830.4`;
                i = i + 1
                if (i === action.state.jdlist.length) {
                    i = 0
                }
                /**axios异步请求*/
                axios.get(url).then(
                    (response) => {
                        //console.log(response.data);
                        const id = response.data.price.id
                        const name = response.data.wareInfo.wname
                        const p = response.data.price.p
                        const epp = response.data.price.epp
                        const jd = { id, name, p, epp }
                        action.commit("START_REQUEST", jd)
                    },

                    (error) => {
                        //  console.log("请求失败...", error);
                    }
                );
            }, 500);
        }
    },
    //准备mutations对象—统一修改state中的数据（方法名请使用大写）
    mutations: {
        /**当有人触发ADD_SKU方法就进行修改*/
        ADD_SKU(mutation, array) {
             // console.log("skus:", array)
            array.forEach((item) => {
                mutation.jdlist.unshift({ id: item, name: "", p: -1, epp: -1 },)
            });
        },
        /**当有人触发 START_REQUEST方法就进行修改*/
        START_REQUEST(mutation, jd) {
            console.log("START_REQUEST:", jd)
            for (var i = 0; i < mutation.jdlist.length; i++) {
                if (mutation.jdlist[i].id == jd.id) {
                        if(mutation.jdlist[i]!==jd){
                    mutation.jdlist.splice(i, 1, jd)}
                }
                
            }
        }
    },
    //准备state对象——保存具体的数据（仓库）
    state: {
        isconsole: "",
        jdlist: [
            { id: 100046501032, name: "", p: -1, epp: -1 },
            { id: 100055973017, name: "", p: -1, epp: -1 },
            { id: 100046079312, name: "", p: -1, epp: -1 },
            { id: 100026170850, name: "", p: -1, epp: -1 },
            { id: 100032197903, name: "", p: -1, epp: -1 },
            { id: 100019004793, name: "", p: -1, epp: -1 },
            { id: 100043866588, name: "", p: -1, epp: -1 },
            { id: 100046798710, name: "", p: -1, epp: -1 },
            { id: 100050138317, name: "", p: -1, epp: -1 },
            { id: 100047522560, name: "", p: -1, epp: -1 },
            { id: 10071755537483, name: "", p: -1, epp: -1 },
            { id: 10069524202729, name: "", p: -1, epp: -1 },
            { id: 10068176982811, name: "", p: -1, epp: -1 },
            { id: 100048063464, name: "", p: -1, epp: -1 },]
    },
    //准备getters对象—统一加工state中的数据（等于computed 但是共享的）
    getters: {}


}
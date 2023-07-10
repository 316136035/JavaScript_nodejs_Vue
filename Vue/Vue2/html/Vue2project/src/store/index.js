import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
import Vuex from 'vuex'  // 引入vuex
import calculate from './calculate.js'    //引入jd.jd模块
import jd from './jd.js'              //引入jd.jd模块                
Vue.use(Vuex) //使用Vuex  响应式共享的数据
//创建并暴露store
export default new Vuex.Store({
    /**多个模块*/
    modules:{
        calculate:calculate,
        jd:jd  }
   })

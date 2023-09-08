import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
import Vuex from 'vuex'  // 引入vuex
import VUEX from './VUEX'    //引入模块文件A

  
Vue.use(Vuex) //使用Vuex  响应式共享的数据
//创建并暴露store
export default new Vuex.Store({
 /**使用多个模块*/
modules:{VUEX}
})
import Vue from 'vue' // 引入vue
import Vuex from 'vuex'   // 引入vuex
import top from './top.js' // 引入top.js模块
import container from './container.js' // 引入container.js模块
Vue.use(Vuex)//应用vuex
// 创建store对象并暴露Vuex.Store对象
export default new Vuex.Store({
  //模块配置对象
  modules: {
    top: top, 
    container:container
  },

})



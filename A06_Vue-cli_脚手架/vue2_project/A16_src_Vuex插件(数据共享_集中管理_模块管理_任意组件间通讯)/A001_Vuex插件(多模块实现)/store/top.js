import { name } from 'pubsub-js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
  namespaced: true,//开启命名空间
  //定义Vuex的actions配置对象(组件中调用,用于编写异步函数)
  actions: {},
  //定义Vuex的actions配置对象
  mutations: {},
  //定义Vuex的mutations配置对象(组件中调用,用于修改数据)
  state: {
     table:"淘神价.Vip"
  },
  //定义Vuex的state配置对象(存储数据)
  getters: {},
}
import Vue from 'vue'
import Vuex from 'vuex'
import top from './top.js'
import container from './container.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    top: top,
    container:container
  },

})
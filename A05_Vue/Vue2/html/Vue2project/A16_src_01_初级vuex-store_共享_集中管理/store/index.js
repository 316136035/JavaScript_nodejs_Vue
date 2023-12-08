// 引入vue.js，脚手架自动引入在node_modules中
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
//使用Vuex  响应式共享的数据
Vue.use(Vuex)

//下面的文件为创建Vue中的最核心文件store
//准备actions对象—统一响应组件中用户的动作(后台代码/异步请求)
const actions = {
    /**判断修改方法（精简的核心文件store，组件传参）*/
    evenaddition(action, value) {
        console.log("actions","evenaddition", action, "value", value)
        if (value % 2 === 0) {
            /**触发mutations对象里面的evenaddition方法*/
            action.commit("EVENADDITION", value)
        }
    },
    /**延迟执行修改方法（精简的核心文件store，组件传参）*/
    delayaddition(action, value) {
        console.log("actions","delayaddition", action, "value", value)
        //设置延迟执行
        setTimeout(() => {
            /**触发mutations对象里面的delayaddition方法*/
            action.commit("DELAYADDITION", value)
        }, 1000);

    },

}
//准备mutations对象—统一修改state中的数据（方法名请使用大写）
const mutations = {
    /**当有人触发addition加法方法就进行修改**/
    ADDITION(mutation, value) {
        console.log("mutation","ADDITION:",  mutation, "value", value)
        mutation.sum += value
    },
    /**当有人触发subtraction减法方法就进行修改**/
    SUBTRACTION(mutation, value) {
        console.log("mutation","SUBTRACTION:",  mutation, "value", value)
        mutation.sum -= value
    },
    /**当有人触发evenaddition法就进行修改*/
    EVENADDITION(mutation, value) {
        console.log("mutation","EVENADDITION:",  mutation, "value", value)
        mutation.sum += value
    },
    /**当有人触发delayaddition方法就进行修改*/
    DELAYADDITION(mutation, value) {
        console.log("mutation","DELAYADDITION:",  mutation, "value", value)
        mutation.sum += value
    }


}
//准备state对象——保存具体的数据（仓库）
const state = {
    sum: 0,

}
//准备getters对象—统一加工state中的数据（等于computed 但是共享的）
const getters = {
    processing(state){
        console.log("@",state)
        return state.sum*10
  }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
     getters 
})

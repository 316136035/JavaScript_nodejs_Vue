
//main.js文件是整个项目的入口文件
//引入Vue
import Vue from 'vue'
//引入App.vue文件（主组件）
import App from './App.vue'
// 开发环境关掉提示
Vue.config.productionTip = false
import store from './store/index.js'
//创建一个Vue实例
new Vue({
 
  /*模板解释器 引入完整版的vue 使用app组件
    1.在脚手架中node_modules\vue\package.json文件中的main.js文件中，可以看到，（ "module": "dist/vue.runtime.esm.js",）
    2. main.js文件中引入了vue.runtime.xxx.js文件不是完整的Vue.js，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
    render函数完整写法（createElement创建元素）
    render: function(createElement) {
    return createElement(App)}*/
  // render函数简写（箭头函数）
  render: h => h(App),store
}).$mount('#app')//挂载到id为app的元素上

// 引入vue.js，脚手架自动引入在node_modules中
import Vue from 'vue'
// 引入App.vue组件（父组件）
import App from './App.vue'
// 关闭vue的生成提示
Vue.config.productionTip = false
//引入插件
// import plugins from './plugins.js'
//使用插件
// Vue.use (plugins)


// 创建vue视图模型实例（脚手架主入口）
new Vue({
  //模板解释器 引入完整版的vue 使用app组件
  /*1.vue.jsjvue.runtime.xxx.js的区别:(1).vue.js是完整版的Vue，包含: 核心功能+模板解析器(2).vue.runtime.xxx.js是运行版的Vue，只包含: 核心功能;没有模板解析器。
    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。*/
  render: h => h(App),
  beforeCreate() {
    //定义原型全局事件总线($bus就是当前的VM)
    Vue.prototype.$bus = this 
  }

}).
  // 绑定容器
  $mount('#app')

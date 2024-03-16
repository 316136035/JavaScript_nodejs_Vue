//main.js文件是整个项目的入口文件
import Vue from 'vue'////引入App.vue文件（主组件）
import App from './App.vue'
import router from './router/index.js'//引入vue路由插件vue-router
import store from './store'//导入vuex

import ElementUI from 'element-ui'; // 引入Element 网站快速成型工具
import 'element-ui/lib/theme-chalk/index.css';// 引入element-ui样式
Vue.use(ElementUI);//注册element-ui
Vue.config.productionTip = false //关闭提示
//创建vue视图模型实例（脚手架主入口）
new Vue({
  router, //使用路由
  store,  //使用vuex
  /*模板解释器 引入完整版的vue 使用app组件
       1.在脚手架中node_modules\vue\package.json文件中的main.js文件中，可以看到，（ "module": "dist/vue.runtime.esm.js",）
       2. main.js文件中引入了vue.runtime.xxx.js文件不是完整的Vue.js，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
       render函数完整写法（createElement创建元素）
       render: function(createElement) {
       return createElement(App)}*/
  // render函数简写（箭头函数）
  render: h => h(App)
}).$mount('#app')

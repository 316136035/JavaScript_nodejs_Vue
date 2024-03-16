//引入主组件
import app from './app.vue'
//创建vue实例
new Vue({
  //挂载点
    el: ShadowRoot,
    //模板
    template: `App`,
    //注册组件
    components: { app }
})

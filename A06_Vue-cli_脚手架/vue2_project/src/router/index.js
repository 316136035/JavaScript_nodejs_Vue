import VueRouter from 'vue-router' //引入vue路由插件vue-router
import front_page from '../page/front_page.vue'//引入vue组件
import Monitor from '../page/Monitor.vue'//引入vue组件
import Personal_center from '../page/Personal_center.vue'//引入vue组件
//创建路由器
const Router = new VueRouter({
  //多个路由配置
  routes: [
    {
      path: '/Front',//组件路径(一级路由)
      name: 'Front',//命名组件名称
      component: front_page //使用过组件

    },
    {
      path: '/Monitor',//组件路径(一级路由)
      name: 'Monitor',//命名组件名称
      component: Monitor//使用过组件
    },
    {
      path: '/Personal_center',//组件路径(一级路由)
      name: 'Personal_center',//命名组件名称
      component: Personal_center//使用过组件
    }

  ]
})
//默认暴露路由器
export default Router

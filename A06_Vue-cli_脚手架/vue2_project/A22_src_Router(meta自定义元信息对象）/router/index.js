import VueRouter from 'vue-router' //引入vue路由插件vue-router
import frontpage from '../page/FrontPage.vue'//引入首页组件（一级路由）
import monitor from '../page/Monitor.vue'//引入监控组件（一级路由）

//创建路由器
const Router = new VueRouter({
  //多个路由配置(一级路由)
  routes: [
    {
      path: '/frontpage',//组件路径
      name: 'FrontPage',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: frontpage, //使用组件（首页组件）
    },
    {
      path: '/monitor',//组件路径(一级路由)
      name: 'Monitor',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: monitor,//使用组件
      //存放路由元信息
      meta: {
        title: '监控页面'
      }
    },
  ]
})
//默认暴露路由器
export default Router

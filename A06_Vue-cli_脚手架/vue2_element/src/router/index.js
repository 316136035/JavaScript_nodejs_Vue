import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue路由插件vue-router

//安装路由插件
Vue.use(VueRouter)
 //多个路由配置(一级路由)
const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

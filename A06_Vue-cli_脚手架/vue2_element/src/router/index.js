import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue路由插件vue-router

/* 三种引入的方式 ./ ../ @/(当前项目) */
//安装路由插件
Vue.use(VueRouter)
//多个路由配置(一级路由)
const routes = [
  {
    path: '/',
    redirect: '/home'
   
  },
  {
    path: '/login',
    name: 'about',
    component: () => import('../views/LogIn/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/index.vue')
  }
]
//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

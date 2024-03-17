import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue路由插件vue-router

/* 三种引入的方式 ./ ../ @/(当前项目) */
//安装路由插件
Vue.use(VueRouter)
//多个路由配置(一级路由)
const routes = [

  { path: '/', redirect: '/home' },

  {
    path: '/index', component: () => import('../views/index.vue'),
    children: [
      { path: '/home', component: () => import('../views/NavMenu/home/index.vue') },
      { path: '/stats', component: () => import('../views/NavMenu/stats/index.vue') },
      { path: '/invoiceManage', component: () => import('../views/NavMenu/Invoicemanage/index.vue'),
       children: [
        { path: '/invoiceManage/issue', component: () => import('../views/NavMenu/Invoicemanage/issue.vue') },
        { path: '/invoiceManage/inquiry', component: () => import('../views/NavMenu/Invoicemanage/inquiry.vue') },
       ]
      },
  
    ]
    
  },

  {
    path: '/login', component: () => import('../views/LogIn/index.vue'),
  },
]





//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

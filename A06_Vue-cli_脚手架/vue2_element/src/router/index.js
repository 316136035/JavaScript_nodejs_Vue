import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue路由插件vue-router

/* 三种引入的方式 ./ ../ @/(当前项目) */
//安装路由插件
Vue.use(VueRouter)
//多个路由配置(一级路由)
const routes = [
  //重定向home首页
  { path: '/', redirect: '/index' },

  { //一级路由 布局页
    path: '/home', name: 'home', component: () => import('../views/Home/index.vue'),
    children: [
      //二级路由 首页
      {path: '/index', name: 'index',component: () => import('../views/Home/index/index.vue')},
       //二级路由 数据管理页
      {path: '/stats',name: 'stats',component: () => import('../views/Home/stats/index.vue')},
      //二级路由  发票管理页
       {path: '/invoiceManage',name: 'Invoicemanage',component: () => import('../views/Home/Invoicemanage/index.vue'),
        children: [
          //三级路由 发票开具页
          {path: '/invoiceManage/issue',name: 'issue',component: () => import('../views/Home/Invoicemanage/issue.vue')},
        //三级路由 发票查询页
        {path: '/invoiceManage/inquiry',name: 'inquiry',component: () => import('../views/Home/Invoicemanage/inquiry.vue')},
        ]
      },
    ]

  },
  ////一级路由  登录页
  {
    path: '/login',
    name: 'about',
    component: () => import('../views/LogIn/index.vue')
  },


]
//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

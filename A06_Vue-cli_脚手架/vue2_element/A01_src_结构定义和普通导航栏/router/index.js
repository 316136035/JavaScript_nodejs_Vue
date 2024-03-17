import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入vue路由插件vue-router

/* 三种引入的方式 ./ ../ @/(当前项目) */
//安装路由插件
Vue.use(VueRouter)
//多个路由配置(一级路由)
const routes = [
  //一级路由 重定向
  { path: '/', redirect: '/home' },
  //一级路由 （布局页）
  {
    path: '/home',name: 'index',meta: { title: '首页' }, component: () => import('../views/index.vue'),
    //二级路由
    children: [
      //二级路由 主页
      { path: '/home', component: () => import('../views/NavMenu/home/index.vue') },
      //二级路由 信息管理
      { path: '/stats', component: () => import('../views/NavMenu/stats/index.vue') },

      { path: '/user', component: () => import('../views/NavMenu/user/index.vue') ,
      //三级路由 
      children: [
        //三级路由  发票开具
        { path: '/user/role', component: () => import('../views/NavMenu/user/role.vue') },
        //三级路由  发票查询
        { path: '/user/statistics', component: () => import('../views/NavMenu/user/statistics.vue') },
      ]
      },
     
      //二级路由 发票管理
      {path: '/invoiceManage', component: () => import('../views/NavMenu/Invoicemanage/index.vue'),
        //三级路由 
        children: [
          //三级路由  发票开具
          { path: '/invoiceManage/issue', component: () => import('../views/NavMenu/Invoicemanage/issue.vue') },
          //三级路由  发票查询
          { path: '/invoiceManage/inquiry', component: () => import('../views/NavMenu/Invoicemanage/inquiry.vue') },
        ]
      },

    ]

  },
 //一级路由 （登录页、注册页）
  {path: '/login', component: () => import('../views/LogIn/index.vue'),},
]





//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

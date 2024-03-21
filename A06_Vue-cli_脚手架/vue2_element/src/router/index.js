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
    path: '/home', name: 'index', meta: { title: '首页' }, component: () => import('../views/index.vue'),
    children: [
      //二级路由
      { path: '/home', name: '/home', meta: { title: '首页' }, component: () => import('../views/NavMenu/home/index.vue') },
     
      //二级路由
      {
        path: '/Table', name: 'Table表单', meta: { title: 'Table表单' }, component: () => import('../views/NavMenu/Table表单/index.vue'),
        //三级路由
        children: [
          //三级路由
          { path: '/Table/ordinaryTable', name: '普通表单', meta: { title: '普通表单' }, component: () => import('../views/NavMenu/Table表单/普通表单/index.vue') },
          //三级路由
          { path: '/Table/add_delete_modify_Table', name: '增删改表单', meta: { title: '增删改表单' }, component: () => import('../views/NavMenu/Table表单/增删改表单/index.vue') },
        ]
      },
        //二级路由
      { path: '/Cascader', name: 'Cascader', meta: { title: '级联选择器页(地址选择)' }, component: () => import('../views/NavMenu/Cascader级联选择器(地址选择)/index.vue') },

    ]
  },
  //一级路由 （登录页、注册页）
  // {path: '/login', component: () => import('../views/LogIn/index.vue'),},
]





//创建路由器对象
const router = new VueRouter({
  routes
})
//默认暴露路由器
export default router

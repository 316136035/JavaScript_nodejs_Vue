import VueRouter from 'vue-router' //引入vue路由插件vue-router
import frontpage from '../page/FrontPage.vue'//引入首页组件（一级路由）
import monitor from '../page/Monitor.vue'//引入监控组件（一级路由）
import login from '../page/Login.vue'

//创建路由器
const Router = new VueRouter({
  //多个路由配置(一级路由)
  routes: [
    {
      path: '/frontpage',//组件路径
      name: 'FrontPage',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: frontpage, //使用组件（首页组件）
      meta: {
        title: '首页'
      }
    },
    {
      path: '/monitor',//组件路径(一级路由)
      name: 'Monitor',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: monitor,//使用组件
      //自定义元信息对象
      meta: {
        title: '监控页面',
        isLogin: true //验证是否需要登录
      }
    },
    {
      path: '/login',//组件路径(一级路由)
      name: 'Login',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: login,//使用组件
      meta: {
        title: '登录页面'
      }
    },
  ]
})
//全局前置路由过滤器（权限控制）组件通过路由的，进入该组件时被调用（to去哪里，from来自哪里，next放行
Router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
      //判断当前路由是否需要登录
      if (window.localStorage.getItem('token')=== "admin") {
        console.log("已登录");
        //判断用户是否登录
        next()
      } else {
        //未登录，跳转登录页面
        next({
          path: '/login'
        })
      }
    } else {
      next()
    }
  next()
})
//全局前置路由过滤器（权限控制）组件通过路由的过滤器，，离开该组件时被调用 （to去哪里，from来自哪里）
Router.afterEach((to, from) => {
  //获取当前路由的元信息对象作为页面标题
  document.title= to.meta.title||'淘神价'
})


//默认暴露路由器
export default Router

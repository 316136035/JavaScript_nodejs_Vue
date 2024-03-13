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
      },

      //单个前置路由过滤器只有前置没有后置（（权限控制）（to去哪里，from来自哪里，next放行）
      beforeEnter: ((to, from, next) => {
        console.log("单个前置路由过滤器")
        //获取路由的参数
        if (to.meta.isLogin) {
          //获取cookies判断用户是否存在
          if (window.localStorage.getItem("token") === "admin") {
            //放行
            next()
          } else {
            //未登录，跳转登录页面
            next({
              path: '/login'
            })
          }
        }
      })

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


//默认暴露路由器
export default Router

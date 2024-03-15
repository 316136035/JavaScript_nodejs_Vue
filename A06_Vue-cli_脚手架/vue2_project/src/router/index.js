import VueRouter from 'vue-router' //引入vue路由插件vue-router


//创建路由器
const Router = new VueRouter({
  mode: "hash",//hash模式(默认配置)打包后面会出现#，服务器中的引入并应用 npm i connect-history-api-fallback 这个插件
  //多个路由配置(一级路由)
  routes: [

    {
      path: '/',//组件路径
      name: '/',   
      redirect: '/home',//重定向到首页
      meta: { //路由元信息
        title: '淘神价' //页面标题
      }
    },
    {
      path: '/home',//组件路径
      name: 'home',
      component: () => import('../views/Home/Front/index.vue'), //使用组件（首页组件）
      // redirect: '/xxxxxxxxxxxx',//重定向
      meta: { //路由元信息
        title: '首页' //页面标题

      },
    
    },
    {
      path: '/index',//组件路径

      name: 'index',
      component: () => import('../views/Home/Front/index.vue'), //使用组件（首页组件）
      meta: { //路由元信息
        title: '淘神价' //页面标题
      }
    },

    {
      path: '/order',//组件路径
      name: 'order',
      component: () => import('../views/Home/Order/index.vue'), //使用组件（首页组件）
      // redirect: '/xxxxxxxxxxxx',//重定向
      meta: { //路由元信息
        title: '首页' //页面标题

      }
    },






    {
      path: '/login',//组件路径
      name: 'login',
      component: () => import('../views/LogIn/index.vue'), //使用组件（登录页面组件）
      // redirect: '/xxxxxxxxxxxx',//重定向
      meta: { //路由元信息
        title: '登录页面' //页面标题

      }
    },





  ]
})

//全局前置路由过滤器（权限控制）组件通过路由的过滤器，，离开该组件时被调用 （to去哪里，from来自哪里）
Router.afterEach((to, from) => {
  //获取当前路由的元信息对象作为页面标题
  document.title = to.meta.title || '淘神价'
  // console.log(to);

})



//默认暴露路由器
export default Router

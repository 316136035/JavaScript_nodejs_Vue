import VueRouter from 'vue-router' //引入vue路由插件vue-router


//创建路由器
const Router = new VueRouter({
  mode: "hash",//hash模式(默认配置)打包后面会出现#，服务器中的引入并应用 npm i connect-history-api-fallback 这个插件
  //多个路由配置(一级路由)
  routes: [
   
    {
      path: '/index',//组件路径
      component: () => import('../page/index/Longin.vue'), //使用组件（登录页面组件）


    },
    {
      path: '/datamanagement',//组件路径
      name: 'DataManagement',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: () => import('../page/LeftNavigationNar/DataManagement.vue'), //使用组件（登录页面组件）
      meta: { //路由元信息
        title: '登录页面' //页面标题
      }
    }, {
      path: '/informationmanagement',//组件路径
      name: 'InformationManagement',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: () => import('../page/LeftNavigationNar/InformationManagement.vue'), //使用组件（登录页面组件）
      meta: { //路由元信息
        title: '登录页面' //页面标题
      }
    },


  ]
})


//默认暴露路由器
export default Router

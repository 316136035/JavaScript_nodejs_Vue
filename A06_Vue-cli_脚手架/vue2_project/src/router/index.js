import VueRouter from 'vue-router' //引入vue路由插件vue-router
import element from '../page/Element.vue'//引入首页组件（一级路由）


//创建路由器
const Router = new VueRouter({
    mode :"history",//使用浏览器的history模式(地址栏中没有“#” 打包后面会出现404，服务器中的引入并应用 npm i connect-history-api-fallback 这个插件)  
  //多个路由配置(一级路由)
  routes: [
    {
      path: '/',//组件路径
      name: 'Element',//命名组件名称(作用在路由组件中不用写路径，直接使用组件名称)
      component: element, //使用组件（首页组件）
      meta: {
        title: 'Element 网站快速成型工具'
      }
    }
  
  ]
})


//默认暴露路由器
export default Router

import VueRouter from 'vue-router' //引入vue路由插件vue-router
import frontpage from '../page/FrontPage.vue'//引入首页组件（一级路由）
import monitor from '../page/Monitor.vue'//引入监控组件（一级路由）
import frontPage_brand from '../page/FrontPage_Brand.vue'//引入品牌组件（二级路由）
import frontPage_introduction from '../page/FrontPage_Introduction.vue'//引入介绍组件（二级路由）
import frontPage_brand_list from '../page/FrontPage_Brand_List.vue'//引入品牌列表组件（三级路由）
//创建路由器
const Router = new VueRouter({
  //多个路由配置(一级路由)
  routes: [
    {
      path: '/frontpage',//组件路径
      name: 'FrontPage',//命名组件名称 
      component: frontpage, //使用过组件（首页组件）
      //二级路由
      children: [
        {
          path: 'frontPage_brand',//组件路径
          name: 'FrontPage_Brand',//命名组件名称
          component: frontPage_brand, //使用过组件
          //三级路由
          children: [
            {
              path: 'frontPage_brand_list',//组件路径
              name: 'FrontPage_Brand_List',//命名组件名称
              component: frontPage_brand_list //使用过组件
            },
          ]
        },
        {
          path: 'frontPage_introduction',//组件路径
          name: 'FrontPage_Introduction',//命名组件名称
          component: frontPage_introduction //使用过组件
        },
      ]
    },
    {
      path: '/monitor',//组件路径(一级路由)
      name: 'Monitor',//命名组件名称
      component: monitor//使用过组件
    },
  ]
})
//默认暴露路由器
export default Router

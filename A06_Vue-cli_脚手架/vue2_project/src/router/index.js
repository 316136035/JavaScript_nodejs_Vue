import VueRouter from 'vue-router' //引入vue路由插件vue-router
import front_page from '../page/Front_page.vue'//引入vue组件
import monitor from '../page/Monitor.vue'//引入vue组件
import personal_center from '../page/Personal_center.vue'//引入vue组件


import Brand from '../page/Brand.vue'
import Introduction from '../page/Introduction.vue'
//创建路由器
const Router = new VueRouter({
  //多个路由配置
  routes: [
    {
      path: '/front',//组件路径(一级路由)
      name: 'Front',//命名组件名称
      component:  front_page, //使用过组件
      children: [
        {
          path: 'brand',//组件路径(二级路由)
          name: 'Brand',//命名组件名称
          component:  Brand //使用过组件
        },
        {
          path: 'introduction ',//组件路径(二级路由)
          name: 'Introduction ',//命名组件名称
          component:  Introduction //使用过组件
        },
       
      ]

    },
    {
      path: '/monitor',//组件路径(一级路由)
      name: 'Monitor',//命名组件名称
      component: monitor//使用过组件
    },
    {
      path: '/personal_center',//组件路径(一级路由)
      name: 'Personal_center',//命名组件名称
      component:  personal_center//使用过组件
    }

  ]
})
//默认暴露路由器
export default Router

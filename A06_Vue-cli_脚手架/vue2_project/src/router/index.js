import VueRouter from 'vue-router' //引入vue路由插件vue-router

//创建路由器
const Router = new VueRouter({
  //多个路由配置(一级路由)
  routes: [

    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('../views/NavMenus/A.vue'),
       children: [
        {
          path: 'A',
          component: () => import('../views/NavMenus/A.vue')
        },
        {
          path: 'B',
          component: () => import('../views/NavMenus/B.vue')
        },
        {
          path: 'C',
          component: () => import('../views/NavMenus/C.vue')
        }
       ]
      
    },

    // {
    //   path: '/A',
    //   component: () => import('../views/NavMenus/A.vue')
    // },
    // {
    //   path: '/B',
    //   component: () => import('../views/NavMenus/B.vue')
    // },
  
    // {
    //   path: '/C',
    //   component: () => import('../views/NavMenus/C.vue')
    // },
  
  
   
  ]
})
//默认暴露路由器
export default Router

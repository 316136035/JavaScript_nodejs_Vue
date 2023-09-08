
//改文件专门用于创建整个用于的vue路由器

// /*引入vue路由插件router */
import VueRouter from "vue-router"
/*引入vue组件 */
import Department from "../pages/Department"
/*引入vue组件 */
import Personnel from "../pages/Personnel"

import DepartmentChildren1 from "../pages/DepartmentChildren1"
import DepartmentChildren2 from "../pages/DepartmentChildren2"
import DepartmentChildren1Message from "../pages/DepartmentChildren1Message"
import DepartmentChildren2Message from "../pages/DepartmentChildren2Message"
// 应用路由插件
// Vue.use(VueRouter)
//创建vue路由器
const vuerouter = new VueRouter({
    mode:"history", //去掉url中的（#）号
    //多个路由
    routes: [
        {   //路径，组件名称(一级路由)
            name: "department",
            path: "/department",
            component: Department,
            meta: { title: "Department" },
            //多个二级路由
            children: [
                {   //二级路由，给路由命名（方便在vue组件中获取）
                    name: "departmentChildren1name",
                    path: "departmentChildren1",
                    component: DepartmentChildren1,
                    //用于权限控制（只能设置meta）
                    meta: { "isAuth": true, title: "部门管理" },
                    //多个三级路由
                    //给路由命名（方便在vue组件中获取）
                    children: [{
                        //给路由命名（方便在vue组件中获取）
                        name: "departmentChildren1Messagename",
                        path: "departmentChildren1Message",
                        component: DepartmentChildren1Message,
                        meta: { "isAuth": true, title: "信息" },

                    }]
                },
                {
                    // 二级路由，给路由命名（方便在vue组件中获取）
                    name: "departmentChildren2name",
                    path: "departmentChildren2",
                    component: DepartmentChildren2,
                    //用于权限控制（只能设置meta）
                    meta: { "isAuth": true, title: "人事管理" },
                    //多个三级路由
                    children: [{
                        //给路由命名（方便在vue组件中获取）
                        name: "departmentChildren2Messagename",
                        //使用params传参数，必须要用占位符:xx
                        path: "departmentChildren2Message/:id",
                        component: DepartmentChildren2Message,
                        meta: { title: "信息" },
                        // props第一种写法，值为对象，该对象所有的ksy-value到会以props的方式传给组件
                        // props:{a:"A",a:"B"},
                        // props第二种写法， props:true，该对象所有的ksy-value到会以props的方式传给组件
                        //  props:true
                        // props第三种写法，该对象所有的ksy-value到会以props的方式传给组件
                        props($route) {
                            return { id: $route.params.id, name: $route.params.name }
                        }

                    }]
                }
            ]
        },
        //路径，组件名称(一级路由)
        {
            path: "/personnel",
            component: Personnel,
            meta: { "isAuth": true,"title": "personnel" },
        //  //单个前置路由过滤器只有前置没有后置（（权限控制）（to去哪里，from来自哪里，next放行）
        //  beforeEnter: ((to, from, next) => {
        //         console.log("单个前置路由过滤器")
        //         //获取路由的参数
        //         if (to.meta.isAuth) {
        //            //获取cookies判断用户是否存在
        //                 if (window.localStorage.getItem("user") === "admin") {
        //                     //放行
        //                     next()
        //                 } else {
        //                     alert("还没有登陆没有权限...")
        //                 }
                    
        //         } 
        //     })
        },
    ]


})
// //全局前置路由过滤器（过滤器每一次页面跳转前也会触发（权限控制））（to去哪里，from来自哪里，next放行）
// vuerouter.beforeEach((to, from, next) => {
//     console.log("全局前置vue的路由过滤:", "to", to)
//     console.log("from", from)
//     console.log("next", next)
//     //获取路由的参数
//     if (to.meta.isAuth) {
//         //判断要去的路径
//         if (to.path === "/department/departmentChildren1" || to.path === "/department/departmentChildren2"||to.path === "/personnel") {
//             //获取cookies判断用户是否存在
//             if (window.localStorage.getItem("user") === "admin") {
//                 //放行
//                 next()
//             } else {
//                 alert("还没有登陆没有权限...")
//             }
//         }
//     } else {
//         next()
//     }


// })

// //全局后置路由过滤器（过滤器每一次页面跳转后也会触发）（to去哪里，from来自哪里）
// vuerouter.afterEach((to, from) => {
//     console.log("全局后置vue的路由过滤:", "to", to)
//     console.log("from", from)

//     //变更页面title
//     if (to.meta.title !== undefined) { document.title = to.meta.title } else { document.title = "淘神价官网" }
// })


export default vuerouter
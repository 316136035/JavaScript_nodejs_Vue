
//该文件专门用于创建整个用于的vue路由器
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
export default new VueRouter({
    //多个路由
    routes: [
        {   //路径，组件名称(一级路由)
            path: "/department",
            component: Department,
            //多个二级路由
            children: [
                {   //二级路由，给路由命名（方便在vue组件中获取）
                    name: "departmentChildren1name",
                    path: "departmentChildren1",
                    component: DepartmentChildren1,
                    //多个三级路由
                    //给路由命名（方便在vue组件中获取）
                    children: [{
                        //给路由命名（方便在vue组件中获取）
                        name: "departmentChildren1Messagename",
                        path: "departmentChildren1Message",
                        component: DepartmentChildren1Message
                    }]
                },
                {
                    // 二级路由，给路由命名（方便在vue组件中获取）
                    name: "departmentChildren2name",
                    path: "departmentChildren2",
                    component: DepartmentChildren2,
                    //多个三级路由
                    children: [{
                        //给路由命名（方便在vue组件中获取）
                        name: "departmentChildren2Messagename",
                        //使用params传参数，必须要用占位符:xx
                        path: "departmentChildren2Message/:id",
                        component: DepartmentChildren2Message,
                        // props第一种写法，值为对象，该对象所有的ksy-value到会以props的方式传给组件
                        // props:{a:"A",a:"B"},
                        // props第二种写法， props:true，该对象所有的ksy-value到会以props的方式传给组件
                        //  props:true
                        // props第三种写法，该对象所有的ksy-value到会以props的方式传给组件
                        props($route) {return { id: $route.params.id, name: $route.params.name } }
                    }]
                }
            ]
        },
        //路径，组件名称(一级路由)
        {
            path: "/personnel",
            component: Personnel
        },
    ]
})
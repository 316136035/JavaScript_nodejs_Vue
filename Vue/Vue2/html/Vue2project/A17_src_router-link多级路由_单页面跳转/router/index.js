
//该文件专门用于创建整个用于的vue路由器

// /*引入vue路由插件router */
import VueRouter from "vue-router"
/*引入vue组件 */
import Department from "../pages/Department"
/*引入vue组件 */
import Personnel from "../pages/Personnel"

import DepartmentChildren1 from "../pages/DepartmentChildren1"
import DepartmentChildren2 from "../pages/DepartmentChildren2"

// 应用路由插件
// Vue.use(VueRouter)
//创建vue路由器
export default new VueRouter({
    //多个路由
    routes: [
        //路径，组件名称(一级路由)
        {
            path: "/department", component: Department,
            //二级路由
            children: [
                { path: "departmentChildren1", component: DepartmentChildren1 },
                { path: "departmentChildren2", component: DepartmentChildren2 }

            ]
        },
        //路径，组件名称
        { path: "/personnel", component: Personnel },
    ]
})
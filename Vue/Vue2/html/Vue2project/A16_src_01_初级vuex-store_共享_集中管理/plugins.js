//默认暴露
export default{
    install(Vue){
        console.log("Vue的构造者：",Vue)
        //过滤器
        // 定义全局过滤器（过滤器方法名，方法体）
        Vue.filter("myfilter", function (value) {
            // 字符串截取
            return (value.slice(0,4))


        })

        //自定义指令
        Vue.directive( "mydirective",{
           // 绑定span元素事就执行非成功写到页面
           bind(element, binding) {
            element.value = binding.value
            console.log("绑定span元素事就执行非成功写到页面")
        },
        //指令所元素被插入页面时
        inserted(element, binding) {
            element.focus() //获得焦点
            console.log("指令所元素被插入页面时")
        },
        //指令所在的模板被重新解释时
        update(element, binding) {
            element.value = binding.value
            console.log("指令所在的模板被重新解释时")
        }
        }
       )
        //定义混入
       Vue.mixin({
        data() {
            return {
                X: "X",
                Y: "YYYYY"
            }
        }
       })
       //给Vue原型上添加一个方法:vm和vc也可以使用了
       Vue.prototype.mymethod=()=>{alert("method方法调用了..")}

    }
}
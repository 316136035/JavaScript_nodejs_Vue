export default {
  /*install 是一个自定义插件（plugin）的接口方法。
  Vue 插件通常用来为 Vue 添加全局功能，比如注册全局组件、指令、过滤器，或者添加一些 Vue 实例方法和属性等。
  当调用 Vue.use() 方法安装插件时，Vue 会安装插件对象上的 install 方法。*/
  install(vue) {
    // 全局过滤器
    Vue.filter("split", function (value) {
      // 字符串截取
      return (value.split("---")[0])
    })
    Vue.directive("focus", {
      // 绑定span元素事就执行非成功写到页面（一般写value值，样式，绑定事件）
      bind(element, binding) {
        element.value = binding.value;//设置文本值
        console.log("绑定span元素事就执行非成功写到页面")
      },
      //指令所元素被插入页面时（获得焦点事件）
      inserted(element, binding) {
        element.focus() //获得焦点
        console.log("指令所元素被插入页面时")
      },
      //指令所在的模板被重新解释时
      update(element, binding) {
        element.value = binding.value//设置文本值
        console.log("指令所在的模板被重新解释时")
      }
    })
    //混入对象（多个组件共用一个js文件的函数和数据）
    Vue.mixin({
      data() {
        return {
          msg: "混入对象（多个组件共用一个js文件的函数和数据）"
        }
      },
    })
    //在Vue实例中添加一个方法
    Vue.prototype.work = function () {
      console.log("我是Vue实例中添加的一个方法")
    }
  }
}
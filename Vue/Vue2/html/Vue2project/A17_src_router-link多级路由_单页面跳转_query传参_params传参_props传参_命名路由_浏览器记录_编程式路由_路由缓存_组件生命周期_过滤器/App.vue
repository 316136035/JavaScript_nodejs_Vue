<template>
  <div id="app">
    <!-- 创建组件 定义属性/传入方法-->
    <Element />
  
   
  </div>
</template>

<script>
// 引入组件
import Element from "./components/Element.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Element: Element,
   
    
  },


};
</script>

<style>
</style>

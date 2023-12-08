<template>
  <div id="app">
    <!-- 创建组件 定义属性/传入方法-->
    <Axios/>
    <hr />
 
  </div>
</template>

<script>
// 引入组件
import Axios from "./components/Axios.vue";


//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Axios: Axios,
    
  },

};
</script>

<style>
</style>

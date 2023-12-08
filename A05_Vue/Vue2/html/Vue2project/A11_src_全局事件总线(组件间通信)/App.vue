<template>
  <div id="app">
    <!-- 创建组件 定义属性/传入方法-->
    <Elder/>
    <hr />
    <Younger/>
  </div>
</template>

<script>
// 引入组件
import Elder from "./components/Elder.vue";
import Younger from "./components/Younger.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Elder: Elder,
    Younger: Younger,
  },

};
</script>

<style>
</style>

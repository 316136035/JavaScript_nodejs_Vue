<template>
  <div id="app">
    <!-- 创建模块 定义属性 -->
    <Student />
    <hr>
    <Worker />
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";
import Worker from "./components/Worker.vue";


 // 引入mixin.js文件 和混合对象
// import {mixin1,mixin2}from'../mixin'
// 全局配置混合
// Vue.mixim(mixin1)
// Vue.mixim(mixin2)

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Student: Student,
    Worker: Worker,
  },
  
};
</script>

<style>
/* 样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

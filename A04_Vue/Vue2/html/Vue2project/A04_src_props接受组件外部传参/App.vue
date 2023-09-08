<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 创建组件 定义属性 -->
     <Student name="刘备" age ="19" gender="男"/>
       <Student name="曹操" age =10 gender="男"/>
       <Student name="操墓" />
    <!-- 获取组件实例对象 -->
   
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Student: Student,
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

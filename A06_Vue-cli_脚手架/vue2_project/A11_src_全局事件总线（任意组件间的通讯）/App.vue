<!-- 模版 -->
<template>
  <div id="app">
    <School></School>
    <html></html>
    <Student></Student>
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    School: School,
    Student:Student,
  },
};
</script>

<!-- css样式 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <!-- 创建模块 定义属性 -->
     <School/>
    <hr>
    <Student />
    <hr>
  
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";
import School from"./components/School.vue"


//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Student: Student,
   School: School,
 
  },

};
</script>

<style>

</style>

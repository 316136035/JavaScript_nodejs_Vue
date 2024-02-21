<!-- 模版 -->
<template>
  <div id="app">
  <Student></Student>
  <hr>
  <Work></Work>
   
 </div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue'
import work from './components/Work.vue'

///暴露主组件的变量和方法 等等  -->
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    Student: Student,
    Work:work

  },
  
  }
 

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

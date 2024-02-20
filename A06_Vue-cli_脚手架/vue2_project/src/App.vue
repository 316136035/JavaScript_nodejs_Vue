<!-- 模版 -->
<template>
  <div id="app">
    <!-- 创建组件 并传入参数    :符号为表达-->
    <Student :name="'淘神价vip'" :age="18" :gender="'男'" ></Student>
 </div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue'
///暴露主组件的变量和方法 等等  -->
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    Student: Student
  },
  data() {
    return {
      msg: '欢迎来到淘神价'
    }
  },
  // 定义方法
  methods: { }
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

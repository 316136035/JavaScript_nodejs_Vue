<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 创建模块 -->
    <SchoolVue msg="Welcome to Your Vue.js App"/>
    <StudenVue/>
  </div>
</template>

<script>
// 引入组件
import SchoolVue from './components/SchoolVue.vue'
import StudenVue from './components/StudenVue.vue'
//  定义一个组件
export default {
  // 声明组件名称
  name: 'App',
  // 构件注册组件
  components: {
    // 注册多个组件
   SchoolVue:SchoolVue,
   StudenVue:StudenVue
  }
}
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

<!-- 模版 -->
<template>
  <div id="app">
      <JdPageDisplay></JdPageDisplay>
  </div>
</template>

<script>
// 引入组件
import JdPageDisplay from './components/JdPageDisplay.vue'
// 暴露组件
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    JdPageDisplay: JdPageDisplay 
  }
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

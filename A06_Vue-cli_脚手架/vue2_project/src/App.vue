<!-- 模版 -->
<template>
  <div id="app">
    <Top></Top>
  </div>
</template>

<script>
// 引入组件
import Top from './components/Top.vue'
// 暴露组件
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    Top: Top
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

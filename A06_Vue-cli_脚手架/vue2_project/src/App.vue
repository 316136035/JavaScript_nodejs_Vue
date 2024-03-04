<!-- 模版 -->
<template>
  <div id="app">
    <SingleSpanningRreques></SingleSpanningRreques>
    <hr />
  <MultipleSpanningRreques></MultipleSpanningRreques>
  </div>
</template>

<script>
// 引入组件
import SingleSpanningRreques from "./components/SingleSpanningRrequest.vue";
import MultipleSpanningRreques from "./components/MultipleSpanningRreques.vue";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    SingleSpanningRreques: SingleSpanningRreques,
    MultipleSpanningRreques: MultipleSpanningRreques,
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

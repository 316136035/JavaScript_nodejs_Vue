<!-- 模版 -->
<template>
  <!-- 布局组件 -->
  <HomePage></HomePage>
</template>

<script>
import  HomePage from "./page/LeftNavigationNar/HomePage.vue";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {HomePage:HomePage},

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>

</style>

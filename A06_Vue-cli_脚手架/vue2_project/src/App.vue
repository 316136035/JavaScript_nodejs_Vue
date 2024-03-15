<!-- 模版 -->
<template>
 <Home></Home>
</template>
<script>
import Home from "./views/Home/index.vue";

// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {
    Home:Home
  },

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>

</style>
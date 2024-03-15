<!-- 模版 -->
<template>
  <div id="app">
  <Index></Index>
  </div>
</template>

<script>

import Index from './views/index.vue';
// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {
   Index
  },

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>

</style>

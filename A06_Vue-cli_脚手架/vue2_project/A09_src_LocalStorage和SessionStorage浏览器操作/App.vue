<!-- 模版 -->
<template>
  <div id="app">
    <LocalStorage></LocalStorage>
    <hr>
    <SessionStorage></SessionStorage>
  </div>
</template>


<script>
// 引入组件
import LocalStorage from './components/LocalStorage.vue';
import SessionStorage from "./components/SessionStorage.vue";

//暴露主组件的变量和方法 等等  -->
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    LocalStorage:LocalStorage,
    SessionStorage:SessionStorage
 
  },
  
 
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>

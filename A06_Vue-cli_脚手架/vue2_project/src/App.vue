<!-- 模版 -->
<template>
  <div id="app">
    <Header></Header>
    <hr />
    <Container_List></Container_List>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header.vue";
import Container_List from "./components/Container_List.vue";
import Footer from "./components/Footer.vue";
//暴露主组件的变量和方法 等等  -->
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    Header: Header,
    Container_List: Container_List,
    Footer: Footer,
  },
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  text-align: center;
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>

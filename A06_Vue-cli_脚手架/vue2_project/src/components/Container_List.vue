<!-- 模版 -->
<template>
  <div id="container-list">
    <!-- 使用子组件 -->
    <Container_Item> </Container_Item>
  </div>
</template>
<script>
// 引入子组件
import Container_Item from "./Container_Item.vue";
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Container_List",
  // 注册子组件
components: {
    Container_Item: Container_Item,
  },
  data() {
    return{ list : ['阅读', '编程', '画画', '音乐', '旅行']} ;
  },
};
</script>

<style scoped>
#container-list {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(98, 100, 0);
}
</style>


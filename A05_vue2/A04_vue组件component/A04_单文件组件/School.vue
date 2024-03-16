
<!--模板  -->
<template>
  <div class="school">
    <div>{{ name }}</div>
    <div>{{ address }}</div>
  </div>
</template>

<!-- 这个是组件的逻辑代码 data数据 mathods方法 computed计算属性 A04_watch监听 等等 -->
<script>
//暴露组件的变量和方法  -->
export default {
  name: "School", //自定义组件的名字（仅在vue开发插件中显示）
  //数据
  data() {
    return {
      name: "欢迎来到淘神价学习",
      address: "广州",
    };
  },
};
</script>


<style>
/* 这里写css样式 */
</style>
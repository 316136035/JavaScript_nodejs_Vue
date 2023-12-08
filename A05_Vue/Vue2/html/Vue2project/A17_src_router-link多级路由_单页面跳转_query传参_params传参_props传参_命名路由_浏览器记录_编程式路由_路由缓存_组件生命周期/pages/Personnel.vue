<template>
  <div>人事管理</div>
</template>

<script>
export default {
  name: "Personnel",
  // 组件挂载完毕..
  mounted() {
    console.log("Personnel人事管理组件挂载完毕..",this,"router代表整个vue路由器，route代表单前路由");

  },
    // 组件即将被销毁
  beforeDestroy() {
    console.log("Personnel人事管理组件即将被销毁了..");
  },


  
};
</script>

<style>
</style>
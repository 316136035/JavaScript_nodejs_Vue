<template>
  <div>
    <div>监控</div>
  <input type="text" >
  </div>
</template>

<script>
export default {
  name: "Monitor",
  mounted() {
    console.log("监控组件加载完成");
  },
  beforeDestroy() {
    console.log("监控组件销毁完成");
  },
};
</script>

<style>
</style>
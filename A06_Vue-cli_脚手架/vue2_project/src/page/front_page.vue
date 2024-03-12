<template>
  <div>首页</div>
</template>

<script>
export default {
  name: "front_page",
  mounted() {
    console.log("首页组件加载完成");
  },
  beforeDestroy() {
    console.log("首页组件销毁完成");
  },
};
</script>

<style>
</style>
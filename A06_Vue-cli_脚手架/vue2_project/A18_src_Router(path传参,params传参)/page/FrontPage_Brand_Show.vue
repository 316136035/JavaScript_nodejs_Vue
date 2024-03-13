<template>
  <div>
    <div>三级路由</div>
    <!-- query获取参数(从路由中的params获取) -->
    <!-- <div>{{$route.query.text}}</div> -->
    <!-- params获取参数(从路由中的params获取) -->
    <div>{{ $route.params.text }}</div>
  </div>
</template>

<script>
export default {
  name: "FrontPage_Brand_Show",

  mounted() {
    console.log("三级路由组件加载完成", this.$route);
  },
  beforeDestroy() {
    console.log("三级路由组件销毁完成");
  },
};
</script>

<style>
</style>
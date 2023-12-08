<template>
  <div>
    <!--从$route中获取params参数 -->
    <!-- <ul>{{ $route.params.id }}</ul>
    <ul>{{$route.params.name }}</ul> -->
     <!-- 读取路由中使用props传来的参数-->
    <ul>ID：{{id }}</ul>
    <ul>名称：{{name }}</ul>
  </div>
</template>

<script>
export default {
  name: "DepartmentChildren2Message",
  props:["id","name"],
  mounted() {
    console.log(this.$route);
  },

};
</script>

<style>
</style>
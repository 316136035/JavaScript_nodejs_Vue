<template>
   <div>
    <div>三级路由</div>
   </div>
  
</template>

<script>
export default {
  name: 'FrontPage_Brand_list',

  mounted() {
    console.log("三级路由组件加载完成");
  },
  beforeDestroy() {
    console.log("三级路由组件销毁完成");
  },
}
</script>

<style>

</style>
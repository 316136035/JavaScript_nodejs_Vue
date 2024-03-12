<template>
     <div>个人中心</div>
</template>

<script>
export default {
  name: 'Personal_center',
  mounted() {
    console.log("个人中心组件加载完成");
  },
  beforeDestroy() {
    console.log("监个人中心组件销毁完成");
  },
}
</script>

<style>

</style>
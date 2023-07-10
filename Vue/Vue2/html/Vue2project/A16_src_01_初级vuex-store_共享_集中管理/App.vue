<template>
  <div id="app" class="app">

    <VueXCalculate/>
  </div>
</template>

<script>
// 引入组件
import VueXCalculate from "./components/VueXCalculate.vue";
//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    VueXCalculate: VueXCalculate,
  },
};
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <!-- 创建模块 定义属性 -->
     <Trasition_Test1/>
    <hr>
     <Trasition_Test2/>
 <hr>
     <Trasition_animate/>
   
  </div>
</template>

<script>
// 引入组件
import Trasition_Test1 from "./components/Trasition_Test1.vue";
import Trasition_Test2 from "./components/Trasition_Test2.vue";
import Trasition_animate from "./components/Trasition_animate.vue";



//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Trasition_Test1: Trasition_Test1,
    Trasition_Test2: Trasition_Test2,
    Trasition_animate:Trasition_animate,
  
 
  },

};
</script>

<style>

</style>

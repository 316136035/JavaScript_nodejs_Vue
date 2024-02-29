<!-- 模版 -->
<template>
  <div class="hello">
     <div id="transition">过渡效果实现</div>
    <button v-on:click="isshow = !isshow">显示/隐藏</button>
    <!-- 过渡效果  自定义名称样式中要用自定义名称开头（.TransitionEffect-xxx-xxx） appear初始挂载开启  -->
    <transition name="TransitionEffect" appear>
      <div class="container" v-show="isshow">过渡效果</div>
    </transition>
  </div>
</template>
<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: "TransitionName",
  data() {
    return {
      isshow: true,
    };
  },
};
</script>
<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
/* 默认样式 */
#transition{
  font-size: 40px;
}
/* 默认样式 */
.container {
  height: 100px;
  background-color: darkorange;
 margin: 10px;
  transition: all 0.9s linear;
}
/* 过渡效果 进入的起点 */
.TransitionEffect-enter {
  background-color: green;
  transform: translateX(-100%);
}
/* 过渡效果 进入的终点 */
.TransitionEffect-enter-to {
  background-color: rgb(255, 0, 0);
  transform: translateX(0%);
}
/* 过渡效果 离开的起点 */
.TransitionEffect-leave {
  background-color: rgb(255, 0, 0);
  transform: translateX(0%);
}
/* 过渡效果 离开的终点 */
.TransitionEffect-leave-to {
  background-color: rgb(8, 8, 9);
  transform: translateX(-100%);
}
</style>

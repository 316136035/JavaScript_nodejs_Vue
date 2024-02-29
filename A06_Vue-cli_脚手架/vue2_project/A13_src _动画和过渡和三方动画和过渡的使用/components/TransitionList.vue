<!-- 模版 -->
<template>
  <div class="hello">
    <div id="animation">过渡效果实现多个元素效果</div>
    <button v-on:click="isshow = !isshow">显示/隐藏</button>
    <!-- transition-group多个元素过渡效果  自定义名称样式中要用自定义名称开头（.TransitionList-xxx-xxx） appear初始挂载开启  -->
    <transition-group name="TransitionList" appear>
      <div class="container" v-show="!isshow" key="1">动画效果1111</div>
      <div class="container" v-show="isshow" key="2">动画效果2222</div>
    </transition-group>
  </div>
</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: "TransitionList",
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
#animation {
  font-size: 40px;
}
.container {
  height: 100px;
  margin: 10px;
  transition: all 0.9s linear;
}
/* 过渡效果 进入的起点 */
.TransitionList-enter {
  background-color: green;
  transform: translateX(-100%);
}
/* 过渡效果 进入的终点 */
.TransitionList-enter-to {
  background-color: rgb(255, 0, 0);
  transform: translateX(0%);
}
/* 过渡效果 离开的起点 */
.TransitionList-leave {
  background-color: rgb(255, 0, 0);
  transform: translateX(0%);
}
/* 过渡效果 离开的终点 */
.TransitionList-leave-to {
  background-color: rgb(8, 8, 9);
  transform: translateX(-100%);
}
</style>

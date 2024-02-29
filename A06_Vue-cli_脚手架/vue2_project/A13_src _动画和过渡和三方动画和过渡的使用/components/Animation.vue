<!-- 模版 -->
<template>
  <div class="hello">
     <div id="animation">动画效果实现</div>
    <button v-on:click="isshow = !isshow">显示/隐藏</button>
    <!-- 过渡效果  自定义名称样式中要用自定义名称开头（.transitionEffect-enter-active/.transitionEffect-leave-active ） appear初始挂载开启  -->
    <transition name="transitionEffect" appear>
      <div class="container" v-show="isshow">动画效果</div>
    </transition>
  </div>
</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: "AnimationName",
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
#animation{
  font-size: 40px;
}
.container {
  height: 100px;
  background-color: rgb(255, 0, 0);
  margin: 10px;
}
/*定义动画 （动画名字）*/
@keyframes Animation-name {
  /* 动画开始的第一帧 */
  from {
    transform: translateX(-100%);
    background-color: black;
  }

  /* 动画结束的最后一帧 */
  to {
    transform: translateX(0%);
    background-color: red;
  }
}
/* 自定义名称-进入-动画 */
.transitionEffect-enter-active {
  /* 动画不需要有事件触发
            动画持续时间,快/慢,延迟时间, 播放次数,方向,开启动画,动画名字*/
  /* animation: 3s linear 1s infinite alternate forwards Animation-name   reverse翻转; */
  animation: 1s Animation-name;
  background-color: rgb(93, 0, 255);
}

/* 自定义名称-离开-动画 */
.transitionEffect-leave-active {
  /* 动画不需要有事件触发
            动画持续时间,快/慢,延迟时间, 播放次数,方向,开启动画,动画名字*/
  /* animation: 3s linear 1s infinite alternate forwards Animation-name;  reverse翻转 */
  animation: 1s Animation-name reverse;
  background-color: rgb(0, 255, 85);
}
</style>

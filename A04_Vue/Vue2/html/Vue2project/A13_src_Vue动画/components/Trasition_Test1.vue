<template>
  <div>
    <div>
         <div>Trasition_Test1</div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!--transition过渡效果 名字appear页面加载就使用动画  -->
      <transition name="transitionName" :appear="true">
        <!-- v-show控制DOM元素的显示和隐藏-->
        <div class="table" v-show="isShow">{{ table }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trasition_Test1",
  data() {
    return {
      isShow: true,
      table: "欢迎来到淘神价...",
    };
  },
};
</script>

<style scoped>


.table {
  background-color: rgb(16, 194, 84);
}
/* 使用动画进入的方法*/
.transitionName-enter-active {
    /*animation动画片：定义动画 1s  linear线性的 */
  animation: trasitionTest 1s linear;
}
/* 使用动画离开的方法*/
.transitionName-leave-active {
    /*animation动画片：定义动画 1s  linear线性的  reverse反转*/
  animation: trasitionTest 1s linear reverse;
}

/* 定义动画 */
@keyframes trasitionTest {
    /* 动画进入起点 */
  from {
    transform: translateX(-100%);
  }
      /* 动画进入终点 */
  to {
    transform: translateX(0%);
  }
}
</style>
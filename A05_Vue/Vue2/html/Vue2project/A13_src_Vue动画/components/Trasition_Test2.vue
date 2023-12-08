<template>
  <div>
    <div>
      <div>Trasition_Test2</div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!--transition-group 过渡效果多个元素 名字appear页面加载就使用动画  -->
      <transition-group name="transitionName" :appear="true">
        <!-- v-show控制DOM元素的显示和隐藏-->
        <div class="table1" v-show="!isShow" key=1>{{ table1 }} </div>
         <div class="table2" v-show="isShow" key=2>{{  table2 }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trasition_Test2",
  data() {
    return {
      isShow: true,
      table1: "欢迎来到淘神价...",
       table2: "欢迎来到淘神价VIP",
    };
  },
};
</script>

<style scoped>
.table1 {
  background-color: rgb(194, 16, 135);
 
}
.table2 {
  background-color: rgb(141, 194, 16);
 
}
/* 进入的起点, 离开的起点*/
.transitionName-enter,.transitionName-leave-to{
  transform: translateX(-100%);
}
/*进入远行时，离开远行时**/ 
.transitionName-enter-active,.transitionName-leave-active{
 transition: 2s linear
}

/* 离开的终点, 进入的终点 */
.transitionName-leave ，transitionName-enter-to{
  transform: translateX(0%);
}
</style>
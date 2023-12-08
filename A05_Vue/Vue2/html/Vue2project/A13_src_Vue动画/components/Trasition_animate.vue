<template>
  <div>
    <div>
      <div>animate动画库</div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!--transition-group 过渡效果多个元素   name="animate的名字必填"  enter-active-class="进入的动画" leave-active-class="离开的动画""-->
      <transition-group  
      :appear="true" 
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutDown"  
       >
       <!-- v-show控制DOM元素的显示和隐藏-->
        <div class="table1" v-show="!isShow" key=1>{{ table1 }} </div>
         <div class="table2" v-show="isShow" key=2>{{  table2 }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import "animate.css"
export default {
 
  name: "Trasition_animate",
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




</style>
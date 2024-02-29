<!-- 模版 -->
<template>
  <div class="hello">
     <div id="transition">三方包实现动画和过渡</div>
    <button v-on:click="isshow = !isshow">显示/隐藏</button>
    <br />
   <!--transition-group 过渡效果多个元素 
      name="animate__animated animate__bounce"(必填)  
      enter-active-class="进入的动画" 
      leave-active-class="离开的动画""-->
    <transition
     name="animate__animated animate__bounce"  
     enter-active-class="animate__backInDown"
     leave-active-class="animate__backOutDown"  >
    <div class="container" v-show="isshow">三方包实现动画和过渡</div>
    </transition>
 </div>
</template>
<script>
// 引入第三方包
import 'animate.css'

//暴露组件的变量和方法 等等  -->
export default {
  name: "Three_party_package",
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

</style>

<template>
  <ul>
    <!--transition-group 过渡效果多个元素   name="animate的名字必填"  enter-active-class="进入的动画" leave-active-class="离开的动画""-->
    <transition-group
      :appear="true"
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutDown"
    >
      <!--遍历data的数组  v-for="(item) in list"  :key="item.id"  
        创建组件 定义属性/传入方法-->
      <MyItem v-for="item in list" :key="item.id" :item="item" />
    </transition-group>
  </ul>
</template>

<script>
import "animate.css";
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem: MyItem,
  },
  //声明接受父组件传来的属性/方法
  props: ["list"],
};
</script>

<style>
</style>
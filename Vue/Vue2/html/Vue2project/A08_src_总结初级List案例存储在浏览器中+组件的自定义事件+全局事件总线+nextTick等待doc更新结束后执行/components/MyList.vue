<template>
  <ul>
    <!--遍历data的数组  v-for="(item) in list"  :key="item.id"  
        创建组件 定义属性/传入方法-->
    <MyItem
      v-for="item in list"
      :key="item.id"
      :item="item"
/>
  </ul>
</template>

<script>
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
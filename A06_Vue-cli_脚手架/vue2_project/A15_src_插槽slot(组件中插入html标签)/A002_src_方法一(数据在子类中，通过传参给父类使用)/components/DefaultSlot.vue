<!-- 模版 -->
<template>
  <div>
    <!-- 定义插槽slot 名称为DefaultSlot  :foods=foods把数据传给父组件（插槽特有的传参方式） -->
    <slot name="DefaultSlot" :foods=foods>我是一个插槽DefaultSlot，当使用者没有传递具体结构时，我会出现.</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: {
        carBrands: ["丰田", "宝马", "奔驰", "奥迪", "特斯拉"],
        movies: ["星际穿越", "阿凡达", "盗梦空间", "泰坦尼克号", "头号玩家"],
        phoneBrands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"],
      },
    };
  },
};
</script>

<style>
</style>
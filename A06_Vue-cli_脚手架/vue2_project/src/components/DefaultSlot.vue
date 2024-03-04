<!-- 模版 -->
<template>

  <div> msg: {{ msg }}</div>

</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  data() {
    return {
      msg: "默认插槽",
      carBrands: ["丰田", "宝马", "奔驰", "奥迪", "特斯拉"],
      movies: ["星际穿越", "阿凡达", "盗梦空间", "泰坦尼克号", "头号玩家"],
      phoneBrands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"],
    };
  },
};
</script>

<style>
</style>
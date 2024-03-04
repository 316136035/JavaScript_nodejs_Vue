<!-- 模版 -->
<template>
  <div id="app">
    <DefaultSlot>
      <template>
        <ul>
          <li ></li>
        </ul>
      </template>

    </DefaultSlot>
    <DefaultSlot></DefaultSlot>
    <DefaultSlot></DefaultSlot>
  </div>
</template>

<script>
// 引入组件
import DefaultSlot from "./components/DefaultSlot";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    DefaultSlot: DefaultSlot,
  },
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

<!-- css样式 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

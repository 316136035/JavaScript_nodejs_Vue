<!-- 学校信息模版 -->
<template>
  <div class="Student">
    <div id="msg">msg</div>
    <div class="Student-name">{{ student.name }}</div>
    <div class="Student-address">{{ student.address }}</div>
    <button v-on:click="sleep">看看他在干嘛</button>
  </div>
</template>

<script>
//引入混合的函数数据 等等  -->
import { mixin1, data1 } from "../mixin.js";
//暴露子组件的变量和方法 等等  -->
export default {
  data() {
    return { student: { name: "淘神价vip", address: "广州" } };
  },
  mixins: [mixin1, data1], //使用混合
};
</script>
<!-- css -->
<style>
#msg {
  color: red;
  font-size: 40px;
}
</style>
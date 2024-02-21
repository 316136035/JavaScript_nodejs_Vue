<!-- 模版 -->
<template>
  <div>
    <div id="msg">{{ msg }}</div>
    <div>{{ work.name }}</div>
    <div>{{ work.age }}</div>
    <div>{{ work.gender }}</div>
    <button v-on:click="sleep">看看他在干嘛</button>
  </div>
</template>

<script>
//引入混合的函数数据 等等  -->
import { mixin1, data1 } from "../mixin.js";
//默认暴露
export default {
  name: "Work",
  data() {
    return {
      work: { name: "工人", age: "20", gender: "男" },
    };
  },

  mixins: [mixin1, data1], //使用混合
};
</script>

<style>
#msg {
  color: red;
  font-size: 40px;
}
</style>
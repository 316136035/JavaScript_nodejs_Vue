<!-- 模版 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
     
      <div>请求url{{ requestText.url }}</div>
      <div>请求方法{{ requestText.method }}</div>
      <div>求路径{{ requestText.path }}</div>
      <div>请求参数{{ requestText.params }}</div>
      <div>请求ip{{ requestText.ip }}</div>
      <hr>
      <div>请求头参数</div>
      <div v-for="(item, index) in requestText.headers" :key="index">
        <div>{{ item }}</div>
      </div>
      <div>{{ requestText.cookies }}</div>
      <div>{{ requestText.body }}</div>
    </div>
    <button v-on:click="span">发送跨越axios请求单个配置</button>
  </div>
</template>

<script>
//引入axios请求包
import axio from "axios";
//暴露组件的变量和方法 等等  -->
export default {
  name: "SingleSpanningRrequest",
  data() {
    return {
      msg: "跨越请求处理方案一",
      requestText: Object,
    };
  },
  methods: {
    span() {
      //发送ajax请求
      axio
        .request({
          //基础URL
          url: `http://localhost:8080/HomePage`,
          //请求方式
          method: "get",
        })
        //成功回调函数
        .then((data) => {
          console.log(data.request.responseText);
          this.requestText = JSON.parse(data.request.responseText);
        });
    },
  },
};
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
</style>

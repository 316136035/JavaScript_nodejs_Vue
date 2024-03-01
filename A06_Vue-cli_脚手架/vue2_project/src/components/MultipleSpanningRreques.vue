<!-- 模版 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="span">发送跨越axios请求</button>
  </div>
</template>

<script>
//引入axios请求包
import axios from "axios";
//暴露组件的变量和方法 等等  -->
export default {
  name: "MultipleSpanningRreques",
  data() {
    return {
      msg: "跨越请求处理方案二",
    };
  },
  methods: {
    span() {
      axios.defaults.withCredentials = true; //跨域请求是携带Cookie ，需要配置
      //发送ajax请求
      axios
        .request({
          //基础URL
          url: "/GetAll/home",
          //请求方式
          method: "get",
         
        })
        //成功回调函数
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
</style>

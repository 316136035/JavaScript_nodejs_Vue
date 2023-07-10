<template>
  <div>
    <button @click="buttonPost">A03_axios响应结果</button>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import axios from "axios";
export default {
  name: "A03_axios响应结果",
  methods: {
    buttonPost() {
      //发送ajax请求
        axios.request({
          baseURL: "/axios", //请求url  跨越时为路劲
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
          data: { firstName: "Fred" }, //请求正文
          withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
        })
        .then((data) => {
          console.log(data);
        })
        //回调函数
        .then(
          //成功回调
          (data) => {
            console.log(data);
          },
          //失败回调
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>


<style scoped>
</style>

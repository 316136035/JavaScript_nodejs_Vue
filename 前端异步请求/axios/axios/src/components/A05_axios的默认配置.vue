<template>
  <div>
    <button @click="buttonPost">A05_axios的默认配置</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A05_axios的默认配置",
  methods: {
    buttonPost() {
      //A05_axios的默认配置
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded"; //浏览器默认的编码格式
      axios.defaults.withCredentials = true; //跨域请求是携带Cookie ，需要配置
      // axios.defaults.baseURL='http://localhost:8080/'  设置基础URL
      axios.defaults.params = { id: 100 }; //设置基础URL传参
      axios.defaults.timeout = 1000; //设置基础超时时间

      //发送ajax请求
      axios
        .request({
          url: "/axios", //请求url  跨越时为路径/  url: "/axios"
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          responseType: "json", // 请求格式默认值
          responseEncoding: "utf8", // 默认值
          headers: { "X-Custom-Header": "foobar", Cookies: "Cookie" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
          data: { firstName: "Fred" }, //请求正文
          withCredentials: true, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
          xsrfCookieName: "cookie", // 默认值

          xsrfCookieName: "XSRF-TOKEN", // 默认值

          xsrfHeaderName: "X-XSRF-TOKEN", // 默认值
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

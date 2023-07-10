<template>
  <div>
    <button @click="button1">axios.request(config)</button>
    <button @click="button2">axios.get(url[, config])）</button>
    <button @click="button3">axios.delete(url[, config])</button>
    <button @click="button4">axios.head(url[, config])</button>
    <button @click="button5">axios.options(url[, config])</button>
    <button @click="button6">axios.post(url[, data[, config]])</button>
    <button @click="button7">axios.put(url[, data[, config]])</button>
    <button @click="button8">axios.patch(url[, data[, config]])</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A01_axios基本使用",
  methods: {
    button1() {
      axios.defaults.withCredentials = true;  //跨域请求是携带Cookie ，需要配置
      
      axios
        .request({
          
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
        });
    },
    button2() {
      axios
        .get("/axios", {
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
        })
        .then((data) => {
          console.log(data);
        });
    },
    button3() {
      axios
        .delete("/axios", {
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
        })
        .then((data) => {
          console.log(data);
        });
    },
    button4() {
      axios
        .head("/axios", {
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
        })
        .then((data) => {
          console.log(data);
        });
    },
    button5() {
      axios
        .options("/axios", {
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
        })
        .then((data) => {
          console.log(data);
        });
    },
    button6() {
      axios
        .post(
          "/axios",
          {data: "data", },  //请求体
          {
            params: { ID: 12345 }, //url传参
            method: "post", //请求方式
            timeout: 1000, //超时时间
            headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
          }
        )
        .then((data) => {
          console.log(data);
        });
    },
    button7() {
      axios
        .put(
          "/axios",
          {data: "data", },  //请求体
          {
            params: { ID: 12345 }, //url传参
            method: "post", //请求方式
            timeout: 1000, //超时时间
            headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
          }
        )
        .then((data) => {
          console.log(data);
        });
    },
    button8() {
      axios
        .patch(
          "/axios",
          {data: "data", },  //请求体
          {
            params: { ID: 12345 }, //url传参
            method: "post", //请求方式
            timeout: 1000, //超时时间
            headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
          }
        )
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>


<style scoped>
</style>

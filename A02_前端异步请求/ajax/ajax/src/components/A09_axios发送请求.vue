<template>
  <div>
    <button @click="buttonget1">A09_axios发送请求 get请求</button
    ><span>{{ getstring }}</span>
    <button @click="buttonget2">A09_axios发送请求 post请求</button
    ><span>{{ poststring }}</span>
    <button @click="button3">A09_axios发送请求完整写法</button
    ><span>{{ jquery }}</span>
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "A09_axios发送请求",
  data() {
    return {
      getstring: "",
      poststring: "",
      jquery: "",
      isSending: false,
    };
  },

  methods: {
    buttonget1() {
      //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
      axios.defaults.withCredentials = true; //配置可以使用cookies请求
      //下面使用的VUE跨越请求
      axios
        .get("/axios", {
          //设置url传参
          params: { id: 1, name: "axios发送请求get跨越请求" },
          //设置请求头参数（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
          headers: {
            cookies: `cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; `,
          },
        })
        //成功回调
        .then((response) => {
          console.log(response);
        })
        //失败回调
        .catch((error) => {
          console.log(error);
        });
    },
    buttonget2() {
      //带着cookies请求请到引包处配置axios.defaults.withCredentials = true; //配置可以使用cookies请求
      axios.defaults.withCredentials = true; //配置可以使用cookies请求
      //下面使用的VUE跨越请求
      axios
        .post(
          "/axios",
          //设置请求data参数

          { username: "admin", password: "admin" },
          {
            //设置url传参
            params: { id: 1, name: "axios发送请求post跨越请求" },
            //设置请求头参数（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
            headers: {
              cookies: `cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; `,
            },
          }
        )

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    button3() {
      axios({
        url: "/axios", //url：地址
        //设置url传参
        params: { id: 1, name: "axios发送请求post跨越请求" },
        //请求体
        data: { username: "admin", password: "admin" },
        //请求格式
        dataType: "json",
        //请求方式
        method: "Post",
        //请求超时时间
        timeout: 1000,
        //设置请求头参数（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
        headers: {
          cookies: `cookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookiescookies; `,
          eid: "eideideideid",
          Header: "HeaderHeaderHeader",
        },
      })
      //成功回调
        .then((response) => {
          console.log(response.status)
        })
        //失败回调
        .catch(() => {});
    },
  },
};
</script>


<style scoped>
</style>

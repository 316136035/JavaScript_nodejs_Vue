<template>
  <div>
    <button @click="buttonget1">A10_fetch发送请求</button
    ><span>{{ getstring }}</span>
   
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "A10_fetch发送请求",
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
     fetch("/axios", {
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
  

  },
};
</script>


<style scoped>
</style>

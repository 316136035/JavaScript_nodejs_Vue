<template>
  <div>
    <button @click="buttonGet">A07_请求拦截器_响应拦截器</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A07_请求拦截器_响应拦截器",
  methods: {
    buttonGet() {
      //请求拦截器
      axios.interceptors.request.use(
        //成功
        (config) => {
          console.log("请求拦截器-->请求成功")
          //利用拦截器添加请求配置
          config.headers ={ "X-Custom-Header": "foobar", Cookies: "Cookie" }//自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
          config.params={a:"a"}
          return config;
        },
        //失败
        (err) => {
            console.log("请求拦截器-->请求失败")
      return    Promise.reject(err);
        }
      );
      //响应拦截器
      axios.interceptors.response.use(
         //成功
        (response) => {
            console.log("拦响应截器-->回调成功")
          return response.data;
        },
        //失败
        (err) => {
            console.log("拦响应截器-->回调成功")
     return     Promise.reject(err);
        }
      );
      axios({
        url: "/axios",
        method: "post",
        timeout: 1000, //超时时间
        responseType: "json", // 请求格式默认值
        responseEncoding: "utf8", // 默认值
        
      }).then((data)=>{
        console.log("响应数据成功：",data)
      }).catch((err)=>{
        console.log("响应数据失败：",err)
      })
    },
  },
};
</script>


<style scoped>
</style>

<template>
  <div id="app">
    <A01_axios基本使用 />
    <hr />
    <A02_axios请求方法别名发送请求 />
    <hr />
    <A03_axios响应结果 />
    <hr />
    <A04_axios的Config配置文件 />
    <hr />
    <A05_axios的默认配置 />
    <hr />
    <A06_axios_create创建对象 />
    <hr />
    <A07_请求拦截器_响应拦截器 />
    <hr />
    <A08_获取消请求_重复发送的问题 />

    <hr />
    <A09_请求html/>
  </div>
</template>

<script>
import A01_axios基本使用 from "./components/A01_axios基本使用.vue";
import A02_axios请求方法别名发送请求 from "./components/A02_axios请求方法别名发送请求.vue";
import A03_axios响应结果 from "./components/A03_axios响应结果.vue";
import A04_axios的Config配置文件 from "./components/A04_axios的Config配置文件.vue";
import A05_axios的默认配置 from "./components/A05_axios的默认配置.vue";
import A06_axios_create创建对象 from "./components/A06_axios.create创建对象.vue";
import A07_请求拦截器_响应拦截器 from "./components/A07_请求拦截器_响应拦截器.vue";
import A08_获取消请求_重复发送的问题 from "./components/A08_获取消请求_重复发送的问题.vue";
import A09_请求html from "./components/A09_请求html.vue";

export default {
  name: "App",
  components: {
    A01_axios基本使用,
    A02_axios请求方法别名发送请求,
    A03_axios响应结果,
    A04_axios的Config配置文件,
    A05_axios的默认配置,
    A06_axios_create创建对象,
    A07_请求拦截器_响应拦截器,
    A08_获取消请求_重复发送的问题,
    A09_请求html,
  },
};
</script>

<style>
</style>

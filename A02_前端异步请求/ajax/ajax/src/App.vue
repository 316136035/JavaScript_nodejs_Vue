<template>
  <div id="app">
    <A01_ajaxGet />
    <A02_ajaxPost />
    <A03_服务器响应JSON数据 />
    <A04_IE浏览器缓存问题 />
    <A05_请求超时和网络异常处理 />
    <A06_请求取消 />
    <A07_请求重复问题处理 />
    <A08_jquery发送ajax请求 />
    <A09_axios发送请求 />
    <A10_fetch发送请求/>
    <A11_jquery处理跨越问题/>
  </div>
</template>

<script>
import A01_ajaxGet from "./components/A01_ajaxGet.vue";
import A02_ajaxPost from "./components/A02_ajaxPost.vue";
import A03_服务器响应JSON数据 from "./components/A03_服务器响应JSON数据.vue";
import A04_IE浏览器缓存问题 from "./components/A04_IE浏览器缓存问题.vue";
import A05_请求超时和网络异常处理 from "./components/A05_请求超时和网络异常处理.vue";
import A06_请求取消 from "./components/A06_请求取消.vue";
import A07_请求重复问题处理 from "./components/A07_请求重复问题处理.vue";
import A08_jquery发送ajax请求 from "./components/A08_jquery发送ajax请求和JSON.vue";
import A09_axios发送请求 from "./components/A09_axios发送请求.vue";
import A10_fetch发送请求 from "./components/A10_fetch发送请求.vue";
import A11_jquery处理跨越问题 from "./components/A11_jquery处理跨越问题.vue";
export default {
  name: "App",
  components: {
    A01_ajaxGet,
    A02_ajaxPost,
    A03_服务器响应JSON数据,
    A04_IE浏览器缓存问题,
    A05_请求超时和网络异常处理,
    A06_请求取消,
    A07_请求重复问题处理,
    A08_jquery发送ajax请求,
    A09_axios发送请求,
    A10_fetch发送请求,
    A11_jquery处理跨越问题
  },
};
</script>

<style>
</style>

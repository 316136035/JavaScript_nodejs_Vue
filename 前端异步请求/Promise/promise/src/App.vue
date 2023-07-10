<template>
  <div id="app">
    <A01_Promise初次使用 />
    <A02_Promise读取文件 />
    <A03_Promise异步请求XMLHttpRequest />
    <A04_Promise_resolve方法_reject方法 />
    <A05_P_Promise_resolve_对象则参数的结果决定了resolve的结果 />
    <A06_Promise_Promise_reject_返回一个失败的Promise对象 />
    <A07_Promise_all_当全部Promise成功回调才会成功 />
    <A08_Promise_Promise_race多个Promise谁回调优先race就立即回调 />
    <A09_Promise_Promise串联多个任务 />
    <A10_Promise_Promise串联多个任务异常穿透/>
    <A11_Promise_Promise串联多个任务异中断任务/>
    <A12_自定义Promise/>
  </div>
</template>

<script>
import A01_Promise初次使用 from "./components/A01_Promise初次使用.vue";
import A02_Promise读取文件 from "./components/A02_Promise读取文件.vue";
import A03_Promise异步请求XMLHttpRequest from "./components/A03_Promise异步请求XMLHttpReques.vue";
import A04_Promise_resolve方法_reject方法 from "./components/A04_Promise_resolve方法_reject方法_同步设置成功回调状态或失败回调状态.vue";
import A05_P_Promise_resolve_对象则参数的结果决定了resolve的结果 from "./components/A05_Promise_Promise.resolve_对象则参数的结果决定了resolve的结果.vue";
import A06_Promise_Promise_reject_返回一个失败的Promise对象 from "./components/A06_Promise_Promise.reject_返回一个失败的Promise对象.vue";
import A07_Promise_all_当全部Promise成功回调才会成功 from "./components/A07_Promise_Promise.all_当全部Promise成功回调才会成功.vue";
import A08_Promise_Promise_race多个Promise谁回调优先race就立即回调 from "./components/A08_Promise_Promise.race多个Promise谁回调优先race就立即回调.vue";
import A09_Promise_Promise串联多个任务 from "./components/A09_Promise_Promise串联多个任务.vue";
import A10_Promise_Promise串联多个任务异常穿透 from "./components/A10_Promise_Promise串联多个任务异常穿透.vue";
import A11_Promise_Promise串联多个任务异中断任务 from "./components/A11_Promise_Promise串联多个任务异中断任务.vue";
import A12_自定义Promise from "./components/A12_自定义Promise.vue";
export default {
  name: "App",
  components: {
    A01_Promise初次使用,
    A02_Promise读取文件,
    A03_Promise异步请求XMLHttpRequest,
    A04_Promise_resolve方法_reject方法,
    A05_P_Promise_resolve_对象则参数的结果决定了resolve的结果,
    A06_Promise_Promise_reject_返回一个失败的Promise对象,
    A07_Promise_all_当全部Promise成功回调才会成功,
    A08_Promise_Promise_race多个Promise谁回调优先race就立即回调,
    A09_Promise_Promise串联多个任务,
    A10_Promise_Promise串联多个任务异常穿透,
    A11_Promise_Promise串联多个任务异中断任务,
    A12_自定义Promise
  },
};
</script>

<style>
</style>

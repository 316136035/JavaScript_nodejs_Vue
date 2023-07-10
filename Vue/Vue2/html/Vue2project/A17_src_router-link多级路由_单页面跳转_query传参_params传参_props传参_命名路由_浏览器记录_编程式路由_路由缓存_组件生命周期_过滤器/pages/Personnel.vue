<template>
  <div>人事管理</div>
</template>

<script>
export default {
  //   name: "Personnel",
  //  // 组件挂载完毕..
  //   mounted() {
  //     console.log("Personnel人事管理组件挂载完毕..",this,"router代表整个vue路由器，route代表单前路由");

  //   },
  //     //组件即将被销毁
  //   beforeDestroy() {
  //     console.log("Personnel人事管理组件即将被销毁了..");
  //   },
  //组件通过路由的过滤器，进入该组件时被调用（to去哪里，from来自哪里，next放行）
  beforeRouteEnter(to, from, next) {
    console.log("通过路由规则，进入该组件时被调用");
    //获取路由的参数
    if (to.meta.isAuth) {
      //获取cookies判断用户是否存在
      if (window.localStorage.getItem("user") === "admin") {
        //放行
        next();
      } else {
        alert("还没有登陆没有权限...");
      }
    }
  },
  //组件通过路由的过滤器，，离开该组件时被调用 （to去哪里，from来自哪里，next放行）
  beforeRouteLeave(to, from, next) {
    console.log("通过路由规则，离开该组件时被调用");
    //放行
    next();
  },
};
</script>

<style>
</style>
<template>
  <div>
    <button @click="setSessionStorage">设置SessionStorage本地本地存储</button> <br />
    <button @click="getSessionStorage">获取SessionStorage本地本地存储</button><br />
    <button @click="removeSessionStorage">删除SessionStorage本地本地存储</button><br />
    <button @click="clearSessionStorage">删除全部SessionStorage本地本地存储</button><br />
  </div>
</template>

<script>
export default {
  name: "SessionStorage",
  methods: {
    //设置SessionStorage本地本地存储
    setSessionStorage() {
      
      windows.sessionStorage.setItem("key1", "value1");
      const user = [
        { name: "新技", age: "19" },
     
      ];
     const userjson= JSON.stringify(user)
      windows.sessionStorage.setItem("user",userjson);
    },
    //获取SessionStorage本地本地存储
    getSessionStorage() {
      console.log(sessionStorage.getItem("key1"));
      const userjson = windows.sessionStorage.getItem("user");
      const user = JSON.parse(userjson);
      console.log("user", user);
    },
    //删除SessionStorage本地本地存储
    removeSessionStorage() {
      windows.sessionStorage.removeItem("key1");
    },
    //删除全部SessionStorage本地本地存储
    clearSessionStorage() {
    windows.sessionStorage.clear();
    },
  },
};
</script>

<style>
</style>
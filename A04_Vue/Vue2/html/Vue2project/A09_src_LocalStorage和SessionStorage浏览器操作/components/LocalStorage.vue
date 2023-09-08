<template>
  <div>
    <button @click="setLoalStorage">设置localStorage本地本地存储</button> <br />
    <button @click="getLoalStorage">获取localStorage本地本地存储</button><br />
    <button @click="removeLoalStorage">删除localStorage本地本地存储</button><br />
    <button @click="clearLoalStorage">删除全部localStorage本地本地存储</button><br />
  </div>
</template>

<script>
export default {
  name: "LocalStorage",
  methods: {
    //设置localStorage本地本地存储
    setLoalStorage() {
      
      windows.localStorage.setItem("key1", "value1");
      const user = [
        { name: "新技", age: "19" },
        { name: "黄新技", age: "18" },
        { name: "额外", age: "60" },
      ];
      localStorage.setItem("user", JSON.stringify(user));
    },
    //获取localStorage本地本地存储
    getLoalStorage() {
      console.log(localStorage.getItem("key1"));
      const userjson = windows.localStorage.getItem("user");
      const user = JSON.parse(userjson);
      console.log("user", user);
    },
    //删除localStorage本地本地存储
    removeLoalStorage() {
      windows.localStorage.removeItem("key1");
    },
    //删除全部localStorage本地本地存储
    clearLoalStorage() {
    windows.localStorage.clear();
    },
  },
};
</script>

<style>
</style>
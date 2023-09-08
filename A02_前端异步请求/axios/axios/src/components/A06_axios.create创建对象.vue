<template>
  <div>
    <button @click="buttonGet">A06_axios.create创建对象</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A06_axios.create创建对象",
  methods: {
    buttonGet() {
      //创建create对象
      const create = axios.create({
        baseURL: "http://localhost:8080/",
        timeout: 1000,
      });

      //发送请求方式1
      create({
        url: "/axios",
        method: "Get",
      }).then((data) => {
        console.log(data);
      });
      //发送请求方式2
      create.get("/axios").then((data) => {
        console.log("get:", data);
      });
    },
  },
};
</script>


<style scoped>
</style>

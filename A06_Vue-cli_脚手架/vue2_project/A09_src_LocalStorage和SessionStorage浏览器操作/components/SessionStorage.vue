<template>
  <div id="SessionStorage">
    <div id="SessionStorageString">SessionStorage 回话本地存储</div>
    <div><button v-on:click="addSessionStorage">添加SessionStorage本地回话数据</button></div>
    <div><button v-on:click="replacedSessionStorage">替换SessionStorage本地回话数据</button></div>
    <div><button v-on:click="getdSessionStorage">获取SessionStorage本地回话存储</button></div>
    <div><button v-on:click="removedSessionStorage">删除SessionStorage本地回话存储</button></div>
    <div><button v-on:click="cleardSessionStorage">删除全部SessionStorage本地回话存储</button></div>
  </div>
</template>

<script>
export default {
  name: "SessionStorage",
  //定义函数
  methods: {
    addSessionStorage() {
      //创建数组对象
      let user = [
        { name: "Alice", age: 25, occupation: "Engineer" },
        { name: "Bob", age: 30, occupation: "Teacher" },
        { name: "Charlie", age: 35, occupation: "Doctor" },
      ];
      //添加数据到SessionStorage
      window.sessionStorage.setItem("user", JSON.stringify(user));
    },
    //替换SessionStorage
    replacedSessionStorage(){
      let user = [{ name: "Alice", age: 25, occupation: "Engineer" }];
      //替换数据到SessionStorage
      window.sessionStorage.setItem("user", JSON.stringify(user));
    },
    //获取SessionStorage(获取不到数据返回null，获取到数据返回字符串)
    getdSessionStorage(){
      let user = window.sessionStorage.getItem("user");
      if (user != null){
       //Json字符串转换为对象
       console.log(JSON.parse(user));
      }
    },
    //删除SessionStorage
    removedSessionStorage(){
      window.sessionStorage.removeItem("user");
    },
    //删除全部SessionStorage
    cleardSessionStorage(){
      window.sessionStorage.clear();
    },
  },
};
</script>

<style>
#SessionStorage {
  border-block: 1px solid rgb(245, 188, 2);
}
#SessionStorageString {
  font-size: 40px;
  color: red;
}
</style>

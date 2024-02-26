<template>
  <div id="localStorage">
    <div id="localStorageString">localStorage本地存储</div>
    <div><button v-on:click="addLocalStorage">添加localStorage本地数据</button></div>
    <div><button v-on:click="replaceLocalStorage">替换localStorage本地数据</button></div>
    <div><button v-on:click="getLocalStorage">获取localStorage本地存储</button></div>
    <div><button v-on:click="removeLoalStorage">删除localStorage本地存储</button></div>
    <div><button v-on:click="clearLoalStorage">删除全部localStorage本地存储</button></div>
  </div>
</template>

<script>
export default {
  name: "LocalStorage",
  methods: {
    //添加数据到localStorage
    addLocalStorage() {
      //创建数组对象
      let user = [
        { name: "Alice", age: 25, occupation: "Engineer" },
        { name: "Bob", age: 30, occupation: "Teacher" },
        { name: "Charlie", age: 35, occupation: "Doctor" },
      ];
      //添加数据到localStorage（user,把对象转为字符串）
      window.localStorage.setItem("user", JSON.stringify(user));
    },
    //替换数据到localStorage
    replaceLocalStorage() {
      let user = [{ name: "Alice", age: 25, occupation: "Engineer" }];
      //替换数据到localStorage（user,把对象转为字符串）
      window.localStorage.setItem("user", JSON.stringify(user));
    },
    //获取localStorage本地本地存储(获取不到数据返回null，获取到数据返回字符串)
    getLocalStorage() {
      //获取数据
      let user = window.localStorage.getItem("user");

      if (user != null){
        console.log(user);
       //Json字符串转换为对象
       console.log(JSON.parse(user));
      }
    },
    //删除localStorage本地本地存储
    removeLoalStorage() {
      window.localStorage.removeItem("user");
    },
    //删除全部localStorage本地本地存储
    clearLoalStorage() {
      window.localStorage.clear();
    },
  },
};
</script>

<style scoped>
#localStorage {
  border-block: solid 1px rgb(0, 255, 162);
}
#localStorageString {
  color: red;
  font-size: 40px;
}
</style>
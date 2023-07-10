<template>
  <div>
    <button @click="loadfilebutton">读取文件</button>
  </div>
</template>

<script>
import loadfile from "../fs/loadFile";
export default {
  name: "A02_Promise读取文件",
  methods: {
    loadfilebutton() {
      const promise = loadfile("./1.txt");
      //获取回调参数(参数)
      promise.then(
        //成功回调
        (value) => {
          alert("数据为：" + value);
        },
        //失败回调
        (error) => {
          alert("出错路径为：" + error);
        }
      );
    },
  },
};
</script>

<style>
</style>
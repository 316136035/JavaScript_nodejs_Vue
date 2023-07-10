<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">A12_自定义Promise</button>
  </div>
</template>

<script>
import Promise from "../fs/自定义Promise";
export default {
  name: "A12_自定义Promise",
  methods: {
    //事件
    buttonpromise() {
      //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("OK");
          //reject("失败了")

        }, 1000);
      });

      //返回的是Promise对象
      const promisethen = promise.then(
        (value) => {
          console.log("成功：:", promise);
            return new Promise((resolve, reject) => {
          reject("Promise失败");
          //resolve(" Promise成功");

           });
           //  return "OKOKOK";
          //  throw "抛出异常";
        },
        (error) => {
          console.log("error):",error);
        }
      );
    
        console.log("promisethen:", promisethen);
    
    },
  },
};
</script>


<style scoped>
</style>

<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">
   A08_Promise_Promise.race多个Promise谁回调优先race就立即回调
    </button>
  </div>
</template>

<script>
export default {
  name: "Promise_all_当全部Promise成功回调才会成功",
  methods: {
    //事件
    buttonpromise() {
      //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
      const P1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          //同步设置成功回调状态或失败回调状态
          resolve("ok1");
          //reject("error");
        },2000);
      });

      const P2 = new Promise((resolve, reject) => {
        //同步设置成功回调状态或失败回调状态
        resolve("ok2");
        //reject("error");
      });
      const P3 = new Promise((resolve, reject) => {
        //同步设置成功回调状态或失败回调状态
        resolve("ok3");
        //reject("error");
      });

      //Promise.all_当全部Promise成功回调才会成功
      let PromiseResolve = Promise.race([P1, P2, P3]);

      //获取回调参数(参数)
      PromiseResolve.then(
        //成功回调
        (data) => {
          console.log(data);
        },
        //失败回调
        (error) => {
          console.log(error);
        }
      );
      //失败回调
      PromiseResolve.catch((error) => {
        console.log("PromiseResolve.catch" + error);
      });
    },
  },
};
</script>


<style scoped>
</style>

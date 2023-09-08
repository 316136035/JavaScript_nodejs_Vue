<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">
    A05_Promise_Promise.resolve()_对象则参数的结果决定了resolve的结果
    </button>
  </div>
</template>

<script>
export default {
  name: "A05_P_Promise_resolve_对象则参数的结果决定了resolve的结果",
  methods: {
    //事件
    buttonpromise() {
      ///如果传入的参数为 非Promise类型的对象，则返回的结果为成功promise对象//如果传入的参数为Promise对象则参数的结果决定了resolve的结果
      let PromiseResolve = Promise.resolve(
        //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
        new Promise((resolve, reject) => {
          //同步设置成功回调状态或失败回调状态
         // resolve("ok")
         reject("error");
        })
      );

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
        console.log("PromiseResolve.catch"+error);
      });
    },
  },
};
</script>


<style scoped>
</style>

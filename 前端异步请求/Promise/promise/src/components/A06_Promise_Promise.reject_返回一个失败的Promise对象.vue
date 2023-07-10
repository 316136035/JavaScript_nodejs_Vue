<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">
   A06_Promise_Promise.reject()_返回一个失败的Promise对象
    </button>
  </div>
</template>

<script>
export default {
  name: "A06_Promise_Promise.reject_返回一个失败的Promise对象",
  methods: {
    //事件
    buttonpromise() {
      ///Promise.reject如果传入的参数为Promise对象则参数的结果决定为失败的结果
      let PromiseResolve = Promise.reject(
        //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
        new Promise((resolve, reject) => {
          //同步设置成功回调状态或失败回调状态
         resolve("ok")
        //reject("error");
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

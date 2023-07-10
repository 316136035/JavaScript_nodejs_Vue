<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">A10_Promise_Promise串联多个任务异常穿透</button>
  </div>
</template>

<script>
export default {
  name: "Promise_Promise串联多个任务",
  methods: {
    //事件
    buttonpromise() {
      //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          //同步设置成功回调状态或失败回调状态
          resolve("任务一成功");
          //reject("error");
        }, 2000);
      });

      //获取回调参数(参数)
      promise.then(
        //成功回调
        (data) => {
          return new Promise((resolve, reject) => {
            resolve("任务二成功");
          })
            .then((value) => {
              throw "err";
            })
            .then((value) => {
              console.log("ok2");
            })
            .then((value) => {
              console.log("ok3");
            })
            //上面的then出错也会执行catch((value) => {console.log("最终执行的代码");});中的代码
            .catch((value) => {
              console.log("最终执行的代码");
            });
        }
      );
    },
  },
};
</script>


<style scoped>
</style>

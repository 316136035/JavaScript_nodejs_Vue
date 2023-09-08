<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">A11_Promise_Promise串联多个任务异中断任务</button>
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
          reject("error");
        }, 100);
      });

      //获取回调参数(参数)
      promise.then(
        //成功回调
        (data) => {
          return new Promise((resolve, reject) => {
            resolve("任务二成功");
          })
            .then((value) => {
                 console.log("ok1");
            })
            .then((value) => {
              //中断任务
              return new Promise((resolve, reject)=>{reject()})
           
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

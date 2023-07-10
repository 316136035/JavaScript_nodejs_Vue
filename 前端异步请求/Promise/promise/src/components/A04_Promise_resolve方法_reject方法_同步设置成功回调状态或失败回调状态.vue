<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">A04_Promise_resolve方法_reject方法_同步设置成功回调状态或失败回调状态</button>
  </div>
</template>

<script>
export default {
  name: "A04_Promise_resolve方法_reject方法",
  methods: {
    //事件
    buttonpromise() {
      //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
      const promise = new Promise((resolve, reject) => {
        //同步设置成功回调状态或失败回调状态
          //resolve("ok")
          reject("error")
      });
      //获取回调参数(参数)
      promise.then(
        //成功回调
        (data) => {
         console.log(data)
        },
         //失败回调
        (error) => {
          alert(error);

        }
      );

      // promise.catch(error=>{
      //   alert("失败回调，和上面第二个参数一样")
      // })
    },
  },
};
</script>


<style scoped>
</style>

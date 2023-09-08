<template>
  <div>
    <!-- 绑定事件 -->
    <button @click="buttonpromise">抽奖</button>
  </div>
</template>

<script>
export default {
  name: "A01_Promise初次使用",
  methods: {
    //事件
    buttonpromise() {
      //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
      const promise = new Promise((resolve, reject) => {
        //定时器
        setTimeout(() => {
          //获取随机数
          let value = Math.floor(Math.random() * (100 - 1) + 1);
          //判断成功执行成功回调(value)
          if (value >= 30) {
            resolve(value);
          } else {
            //判断失败执行失败回调(value)
            reject(value);
          }
        }, 1000);
      });
      //获取回调参数(参数)
    const p=  promise.then(
        //成功回调
        (value) => {
           return '中奖了...中奖数据为'+value
          //alert("中奖了...中奖数据为："+value);
        },
         //失败回调
        (error) => {
          throw "抛出异常"
          //alert("再接再厉数据为："+error);

        }
      );
      console.log(p)

      // promise.catch(error=>{
      //   alert("失败回调，和上面第二个参数一样")
      // })
    },
  },
};
</script>


<style scoped>
</style>

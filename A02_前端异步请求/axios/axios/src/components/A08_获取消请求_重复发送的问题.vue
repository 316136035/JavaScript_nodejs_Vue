<template>
  <div>
    <button @click="button1">发起请求</button>
        <button @click="button2">取消请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A08_获取消请求_重复发送的问题",
  data() {
    return { cancel:null}; //定义一个变量
  },
  methods: {
    button1() {
      if(this.cancel!=null){return}
      axios({
        url: "/axios",
        method: "post",
        // timeout: 1000, //超时时间
        responseType: "json", // 请求格式默认值
        responseEncoding: "utf8", // 默认值
        cancelToken: new axios.CancelToken((cancel) => {
          //发送的时候把cancel变量设置为cancel
          this.cancel = cancel;
        }),
      })
        .then((data) => {
          console.log("响应数据成功：", data);
          //响应数据成功把cancel变量设置为null
          this.cancel=null
        })
        .catch((err) => {
          console.log("响应数据失败：", err);
        });
    },
    button2(){
      //取消请求
      this.cancel()
      //取消请求成功把cancel变量设置为null
       this.cancel=null
    }
  },
};
</script>


<style scoped>
</style>

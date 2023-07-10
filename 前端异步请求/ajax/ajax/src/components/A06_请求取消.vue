<template>
  <div>
    <button @click="buttonget1">A06_请求</button>
    <button @click="buttonget2">A06_取消请求</button>
    <span>{{ string }}</span>
  </div>
</template>

<script>
export default {
  name: "A06_请求取消",
  data() {
    return {
      string: "",
     
    };
  },

  methods: {
    buttonget1() {
     
      //创建新的 XMLHttpRequest 对象
      const xhr = new XMLHttpRequest();
       this.XMLHttpRequest=xhr
      //初始化URL请求(处理A04_IE浏览器缓存问题 更新每一次请求url )
      xhr.open("Get", "http://127.0.0.1:80/serversetTimeout");
      //设置请求超时时间
      xhr.timeout = 2000;
      //设置请求超时回调
      xhr.ontimeout = () => {
        alert("返回时间过长....");
      };
      //设置请求网络异常回调
      xhr.onerror = () => {
        alert("网络异常...");
      };

      //设置请求头  下面是安全的设置不成功
      /*Origin: `https://item.jd.com`',
        Referer: `https://item.jd.com//',
        "Host", "api.m.jd.com" */
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      //发送请求
      xhr.send("sda:qwr");
      /*事件绑定 处理服务端返回的结果
       on when 当....时候
       readystate 是 xhr 对象中的属性，表示状态 ·1-2·3·4
      change改变*/
      xhr.onreadystatechange = () => {
        //判断xhr 对象中的属性是否等于4 （4代表成功返回结果）
        if (xhr.readyState === 4) {
          //判断响应状态码是否成功
          if (xhr.status >= 200 && xhr.status <= 300) {
            //处理结构
            console.log("状态码：", xhr.status);
            console.log("状态码字符串：", xhr.statusText);
            console.log("所有响应头：", xhr.getAllResponseHeaders());
            console.log("响应体：", xhr.response);
            //渲染回调响应体
            this.string = xhr.response;
          }
        }
      };
    },
    buttonget2() {
    //取消请求
     this.XMLHttpRequest.abort()
    },
  },
};
</script>


<style scoped>
</style>

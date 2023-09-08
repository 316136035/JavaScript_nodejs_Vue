<template>
  <div>
    <button @click="buttonget">A04_IE浏览器缓存问题</button>
    <span>{{ string }}</span>
  </div>
</template>

<script>
export default {
  name: "A04_IE浏览器缓存问题",
  data() {
    return {
      string: "",
    };
  },

  methods: {
    buttonget() {
      //创建新的 XMLHttpRequest 对象
      const xhr = new XMLHttpRequest();
      //初始化URL请求(处理A04_IE浏览器缓存问题 更新每一次请求url )
      xhr.open("Get", "http://127.0.0.1:80/serverget?time="+Date.now());
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
  },
};
</script>


<style scoped>
</style>

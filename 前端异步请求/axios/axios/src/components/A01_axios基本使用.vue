<template>
  <div>
    <button @click="buttonGet">axios发送Get请求</button>
      <button @click="buttonPost">axios发送Post请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "A01_axios基本使用",
  methods: {
    buttonGet() {
      //发送ajax请求
      axios({
        baseURL: "/axios", //请求url  跨越时为路劲
          params: { ID: 12345 }, //url传参
          method: "post", //请求方式
          timeout: 1000, //超时时间
          headers: { "X-Custom-Header": "foobar" }, //自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
          data: { firstName: "Fred" }, //请求正文
          withCredentials: false, // default    // `withCredentials` 表示跨域请求时是否需要使用凭证
      })
      //回调函数
      .then( 
        //成功回调
        (value) => {
          console.log(value.data)
        },
        //失败回调
        (error) => {
           console.log(error)
        }
      )
     
    },
    buttonPost(){
      //发送ajax请求
      axios({
        method: "Post",  //请求类型
        url: "/axios", //请求url地址
        data:{
          id:3,
          title:"方太（FOTILE）抽吸油烟机灶具F1新月系列套装 家用侧吸式变频烟灶24大风量烟灶联动5kW燃气灶01-F1A+THF1A天然气",
          author:"【重磅新品耀世上市】火爆抢购中！咨询享到手价不高于5699！咨询客服再领200元尝鲜劵！前500名享晒单赠菲仕乐套锅！价保618！买贵退差！",



        }
      })
      //回调函数
      .then( 
        //成功回调
        (value) => {
          console.log(value.data)
        },
        //失败回调
        (error) => {
           console.log(error)
        }
      )
     

    }
  },
};
</script>


<style scoped>
</style>

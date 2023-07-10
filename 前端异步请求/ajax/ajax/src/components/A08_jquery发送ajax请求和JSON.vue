<template>
  <div>
    <button @click="buttonget1">A08_jquery发送ajax请求和JSON get请求</button
    ><span>{{ getstring }}</span>
    <button @click="buttonget2">A08_jquery发送ajax请求和JSON post请求</button
    ><span>{{ poststring }}</span>
    <button @click="buttonget3">
      A08_jquery发送ajax请求完整写法和JSON get请求</button
    ><span>{{ jquery }}</span>
  </div>
</template>

<script >
import $ from "jquery";
export default {
  name: "A07_请求重复问题处理",
  data() {
    return {
      getstring: "",
      poststring: "",
      jquery: "",
      isSending: false,
    };
  },

  methods: {
    buttonget1() {
      //$.get("ulr",{对象}，回调函数，"Json格式")   注意回调时候数据要是json格式数据
      $.get(
        "http://127.0.0.1:80/jquery",
        { a: "a", b: "b" },
        (data) => {
          console.log(data);
          this.getstring = data;
        },
        "json"
      );
    },

    buttonget2() {
      //$.post("ulr",{对象}，回调函数，"Json格式")   注意回调时候数据要是json格式数据
      $.post(
        "http://127.0.0.1:80/jquery",
        { a: "a", b: "b" },
        (data) => {
          this.poststring = data;
        },
        "json"
      );
    },
    buttonget3() {
      //$.post("ulr",{对象}，回调函数，"Json格式")   注意回调时候数据要是json格式数据
      $.ajax({
        url: "http://127.0.0.1:80/jqueryjson", //url：地址
        //对象
        data: { a: "a", b: "b" },
        //请求格式
        dataType: "json",
        //请求方式
        type: "Get",
        //请求超时时间
        timeout: 1000,
        //设置请求头 (实际没有发送 Headers参数)
        Headers: {
          "eid": "eideideideid",
          "Header": "HeaderHeaderHeader",
        },
        //正常回调
        success: (data) => {
          console.log("正常回调:", data);
          this.jquery = data;
        },
        //异常回调
        error: (error) => {
          console.log("出错：" + error);
        },
        //本次请求完成后
        complete: (complete) => {
          console.log("本次请求完成了..");
        },
        //本次请求完成状态码
        statusCode: (complete) => {
          console.log("本次请求完成状态码:", complete);
        },
      });
    },
  },
};
</script>


<style scoped>
</style>

<template>
  <div>
    <button @click="buttonget1">A11_jquery处理跨越问题</button
    ><span>{{ getstring }}</span>
   
  </div>
</template>

<script >
import $ from "jquery";
export default {
  name: "A11_jquery处理跨越问题",
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
      //$.post("ulr",{对象}，回调函数，"Json格式")   注意回调时候数据要是json格式数据
      $.getJSON('http://127.0.0.1:80/jqueryacross?callback=?',(data)=>{
        console.log(data)
      });
    },
  },
};
</script>


<style scoped>
</style>

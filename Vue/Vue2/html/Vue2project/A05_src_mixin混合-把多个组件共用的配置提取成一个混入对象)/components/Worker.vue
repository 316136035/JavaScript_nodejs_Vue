<template>
  <div>
    <div>Welcome{{ msg }}</div>
    <div>姓名:{{ name }}</div>
    <div>年龄:{{ age }}</div>
     <button @click="showname">获取名字</button>
  
  </div>
</template>

<script>

import {mixin1,mixin2}from'../mixin'
export default {
 name: "Student",
  data() {
    return {
     msg: "工人",
      name:"黄工人",
      age:"18"  

    }
  },
    //使用混合对象（混合对象的方法名要和绑定的事件是一样）
   mixins:[mixin1,mixin2]
  
};
</script>

<style>
</style>
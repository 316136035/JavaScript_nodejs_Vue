<template>
  <div>
    <div>Welcome{{ msg }}</div>
    <div>姓名:{{ name }}</div>
    <div>年龄:{{ age }}</div>
     <button @click="showname">获取名字</button>
  
  </div>
</template>

<script>
//引入mixin.js文件 和混合对象
 import {mixin1,mixin2}from'../mixin'
export default {
 
  name: "Student",
  data() {
    return {
      msg: "学生",
      name:"周先生",
      age:"18",
       X:"Student", //混合中组件的为主
    }
  },
  //使用混合对象（混合对象的方法名要和绑定的事件是一样）
   mixins:[mixin1,mixin2]
 

}
</script>

<style>
</style>
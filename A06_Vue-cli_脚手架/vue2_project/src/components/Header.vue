<!-- 模版 -->
<template>
   <div id="header">
     <input type="text" v-bind:value="msg">
   </div>
   
 </template>
 
 
 <script>
 //暴露主组件的变量和方法 等等 
 export default {
  name: 'Header',
  data() {
    return {
      msg: '我是头部'
    }
  },
 }
 </script>
 
 <style scoped>
 #header{
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(55, 0, 100);
 }
 
 </style>
<!-- 模版 -->
<template>
  <div id="footer">
    <div>{{ msg}}</div>
  </div>
</template>

<script>
//暴露主组件的变量和方法 等等  -->
export default {
 name: 'Footer',
 data() {
    return {
      msg: '我是底部'
    }
  }
}
</script>

<style scoped>
 #footer{
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(0, 97, 100);
 }
 
 </style>
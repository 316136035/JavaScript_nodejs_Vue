<template>
  <el-carousel :interval="1000" type="card" height="120px">
    <el-carousel-item v-for="item in imglist" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
 name: 'Carousel',
 props: {
  },
 data() {
   return {
    imglist:[require("@/assets/img/1.png"),
    require("@/assets/img/2.png"),
    require("@/assets/img/3.png"),
    require("@/assets/img/4.png"),]  }
 },
}
</script>
<style>
img{
  width: 100%;
  height:100%;
}
 
</style>


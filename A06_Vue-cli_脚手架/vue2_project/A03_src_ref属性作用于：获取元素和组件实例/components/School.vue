<!-- 学校信息模版 -->
<template>
  <div class="school">
     <div class="school-name">{{school.name}}</div>
     <div class="school-address">{{school.address}}</div>
  </div>
</template>

<script>
//暴露子组件的变量和方法 等等  -->
export default {
  data() {
    return {
      school :{name:'淘神价vip',address:'广州'} 
    }
  },
}

</script>
<!-- css -->
<style>
.school-name{
  font-size: 40px;
  color: red;
}


</style>
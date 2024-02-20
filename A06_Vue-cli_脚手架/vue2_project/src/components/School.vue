<!-- 学校信息模版 -->
<template>
  <div class="school">
     <div class="school-name">{{school.name}}</div>
     <div class="school-address">{{school.address}}</div>
  </div>
</template>


<script>
//暴露组件的变量和方法 等等  -->
export default {
  data() {
    return {
      school :{name:'淘神价vip',address:'广州'} 
    }
  },

}
</script>

<style>

</style>
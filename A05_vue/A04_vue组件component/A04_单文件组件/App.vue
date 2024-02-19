<template>
  <div>
   <!-- 使用子组件 -->
    <school></school>
    <student></student>
  </div>
  
</template>

<script>
//导入子组件
  import Student  from './Student.vue'
  import School from './School.vue'
  
  //暴露组件的变量和方法 等等  -->
export default {
  name:"App", //主组件
  //注册子组件
  components:{
    Student: Student,
    School: School
  },

}
</script>

<style>
/* 这里写css样式 */

</style>
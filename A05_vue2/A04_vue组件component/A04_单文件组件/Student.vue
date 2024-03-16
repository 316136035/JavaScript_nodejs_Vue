<!-- 模版 -->
<template>
  <div>
      <div>{{name}} </div>
      <div>{{age}} </div>
  </div>
</template>


<!-- 这个是组件的逻辑代码 data数据 mathods方法 computed计算属性 A04_watch监听 等等 -->
<script>
//暴露组件的变量和方法  -->
export default {
  name: "Student",//自定义组件的名字（仅在vue开发插件中显示）
  //数据
  data() {
    return {
      name: "学生",
      age: 18,
    };
  },
};
</script>

<style>
/* 这个是组件的样式代码 */
</style>
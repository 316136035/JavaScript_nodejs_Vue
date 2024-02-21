<!-- 学校信息模版 -->
<template>
  <div class="Student">
    <!-- （|）管道符使用自定义插件过滤器 -->
    <div class="Student-name">{{ student.name| split}}</div>
    <!-- 使用自定义插件中的自定义指令 -->
    <div><input type="text" v-focus:value="student.name"></div>
     <!-- 使用Vue原型对象中的方法 -->
     <div><button v-on:click="click" >使用Vue原型对象中的方</button></div>

  </div>
</template>

<script>

//暴露子组件的变量和方法 等等  -->
export default {
  data() {
    return { student: { name: "淘神价---vip", address: "广州" } };
  },
  methods :{
    click() {
      this.work()
    }
  }

};
</script>
<!-- css -->
<style>
#msg {
  color: red;
  font-size: 40px;
}
</style>
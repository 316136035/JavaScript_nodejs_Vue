<!-- 模版 -->
<template>
  <div class="School">
    <h1>我是学校组件,学生列表</h1>
    <div>{{ student }}</div>
  </div>
</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: "School",
  data() {
    return {
      student: null,
    };
  },
  methods: {
    //定义函数
    getStudent(student) {
      //把子组件传过来的对象赋值给父组件的student对象
      this.student = student;
      console.log(JSON.stringify(student));
    },
  },
  //Vue完成模板的解析并把初始的真实DOM元素放入页面后(挂载完毕)， 该钩子函数会被调用。
  mounted() {
  //在VUE的原型上的$bus(事件总线)中绑定一个函数
    this.$bus.$on("getStudent", this.getStudent);
  },
   //销毁前
   beforeDestroy(){
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("getStudent")
   }
};
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
#School {
  background-color: red;
}
</style>

<!-- 模版 -->
<template>
  <div class="School">
    <h1>我是学校组件,学生列表</h1>
    <div>{{ student }}</div>
  </div>
</template>

<script>
import  pubsub from "pubsub-js";
//暴露组件的变量和方法 等等  -->
export default {
  name: "School",
  data() {
    return {
      student: null,
    };
  },
  methods: {
    //定义函数(第一个参数是函数名,第二个参数student)
    getStudent(_,student) {
      //把子组件传过来的对象赋值给父组件的student对象
      this.student = student;
      console.log(JSON.stringify(student));
    },
  },
  //Vue完成模板的解析并把初始的真实DOM元素放入页面后(挂载完毕)， 该钩子函数会被调用。
  mounted() {
    //订阅消息（函数名，本组件的函数）
    this.pubsubID=pubsub.subscribe("getStudent", this.getStudent);
  },
   //销毁前
   beforeDestroy(){
    //销毁前把消息订阅与发布方法关闭
    pubsub.unsubscribe(this.pubsubID);
   }
};
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
#School {
  background-color: red;
}
</style>

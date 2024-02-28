<template>
  <div id="student">
    <h1>我是Student组件</h1>
    <p>姓名：{{ student.name }}</p>
    <p>年龄：{{ student.age }}</p>
    <p>性别：{{ student.sex }}</p>
    <button v-on:click="getStudent">获取学生信息返回给School组件</button>
  </div>
</template>

<script>
import  pubsub from "pubsub-js";
export default {
  name: "Student",
  //定义数据
  data() {
    return {
      student: {
        name: "张三",
        age: 18,
        sex: "男",
      },
    };
  },
  //定义函数
  methods: {
    getStudent() {
      //发布消息
      pubsub.publish("getStudent",this.student)
    },
  },
 
};
</script>

<style scoped>
#student {
  background-color: chartreuse;
}
</style>
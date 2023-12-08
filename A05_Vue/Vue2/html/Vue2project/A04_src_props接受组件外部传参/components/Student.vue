<template>
  <div>
    <div>Welcome{{ msg }}</div>
    <div>姓名:{{ name }}</div>
    <div>年龄:{{ age }}</div>
    <div>性别:{{ gender }}</div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎来到下泥...",
    };
  },
/*   //简单声明接受
    props: ["name", "age", "gender"],
  //声明接受的同时对数据进行类型限制
    props: {
      name: String, //限制为字符串
      age: Number, //限制为数字
      gender: String,
    }, */
    //声明接受的同时对数据进行类型限制和必要性的限制
   props: {
    name: { String, required: true }, //声明接受字符串，必填
    age: { Number, default: 100 },      //声明接受数字，非必填有默认值
    gender: { String, required: false },//声明接受字符串，非必填
  },
};
</script>

<style>
</style>
<!-- 学校信息模版 -->
<template>
  <div class="Student">
    <div class="Student-name">{{ name }}</div>
    <div class="Student-age">{{ age+1 }}</div>
    <div class="Student-address">{{ gender }}</div>
  </div>
</template>

<script>
//暴露子组件的变量和方法 等等  -->
export default {
  /**声明接受数据三种写法*/
  /*1.简单写法 */
  props: ["name", "age", "gender"],
  /*2.声明接受的同时对数据进行类型限制*/
  props: {
    name: String, //限制为字符串
    age: Number, //限制为数字
    gender: String,//限制为字符串
  },
  /*3.声明接受的同时对数据进行类型限制和必要性的限制*/
  props: {
    name: { String, required: true }, //声明接受字符串，必填
    age: { Number, default: 100 }, //声明接受数字，非必填有默认值
    gender: { String, required: false }, //声明接受字符串，非必填
  },
};
</script>
<!-- css -->
<style>
.school-name {
  font-size: 40px;
  color: red;
}
</style>
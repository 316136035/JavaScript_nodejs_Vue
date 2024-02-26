<!-- 学校信息模版 -->
<template>
  <div class="Student">
    <div class="Student-name">{{  myname  }}</div>
    <div class="Student-age">{{ age+1 }}</div>
    <div class="Student-address">{{ gender }}</div>
  </div>
</template>

<script>
//暴露子组件的变量和方法 等等  -->
export default {
  data() {
    return { myname :this.name //传入的参数赋值给 myname
    }
  },
  /**声明接受数据三种写法 传入的参数不建议修改  备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。*/
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
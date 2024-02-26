<template>
  <div class="container">
    <div>
      <!-- 单价事件绑定 -->
      <button v-on:click="getStudentsName">获取学生信息返回给app组件</button>
    </div>
    <div>
      <button v-on:click="untiegetname">解绑组件自定义绑定事件</button>
      <button v-on:click="mydestroy">销毁当前Students组件实例vc</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: { name: "淘神价" },
    };
  },
  methods: {
    //子组件事件
    getStudentsName() {
      //触发父组件方法getStudentsName_click 第二参数this.student
      this.$emit("getStudentsName_click", this.student);
    },
    //组件的解绑方法(解绑后的js默认的事件有效 自定义事件不奏效)
    untiegetname() {
      //解绑多=单个自定义绑定事件
      this.$off("getStudentsName_click");
      //解绑多个自定义绑定事件
      //this.$off(["事件名", "事件名"]);
      //解绑全部自定义绑定事件
      //this.$off()
    },
    mydestroy() {
      //销毁当前Students组件实例vc(销毁后的事件全不奏效)
      this.$destroy();
    },
  },
};
</script>

<style>
</style>
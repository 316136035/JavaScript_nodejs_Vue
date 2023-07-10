<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="getname">消息/订阅(组件间通信)</button>
  </div>
</template>

<script>
//引入消息/订阅的pubsub包（使用要安装包 npm i pubsub-js）
import pubsub from "pubsub-js";
export default {
  name: "Younger",
  data() {
    return {
      msg: "我是弟弟组件",
      user: { name: "周伟彬", age: "19" },
    };
  },
  methods: {
    getname() {
      //调用Elder组件的（getYoungername方法，参数）
      // this.$bus.$emit("getYoungername",this.user)
      //pubsub包发布
      pubsub.publish("getYoungername", this.user);
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <input type="text" ref="textanme" v-model="text" placeholder="请输入...." />
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      text: "",
    };
  },
  //声明接受父组件传来的属性/方法
  props: ["additem"],
  methods: {
    add() {
        //判断输入框的字符串是否为undefined/null/""  当一个为空就返回
      if (
        typeof this.text === "undefined" ||
        this.text == null ||
        this.text === ""
      )
        return;
      //获取输入框的参数
      const text = this.$refs.textanme.value;
      //定义一个新对象
      const item = { id: Date.now(), tilel: this.text, check: false };
    //调佣父组件传来的方法 
      //this.additem(item);
       //this.$emit("additem",item)
        this.$bus.$emit("additem",item)
      this.text = "";
    },
  },
};
</script>


<style>
</style>
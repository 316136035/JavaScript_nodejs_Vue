<!-- 模版 -->
<template>
  <div id="header">

    <label for="name">名称:</label>
    <input id="name" type="text" v-model="name" />
    <label for="price">价格:</label>
    <input id="price" type="number" v-model="price" />
    <button v-on:click="createitem">添加</button>
  </div>
</template>
 
 
 <script>
//暴露主组件的变量和方法 等等
export default {
  name: "Header",
 methods: {
    createitem() {
   //判断输入框的字符串是否为undefined/null/""  当一个为空就返回
   if (
        typeof this.name === "undefined" ||
        this.name == null ||
        this.name === ""
      )
        return;
      //创建对象
       const item={id:Date.now(),name:this.name,price:this.price,check:this.check}
       //触发父组件的方法
        this.$bus.$emit("additem", item);
      
    },
  },
  //定义数据 双向绑定
  data() {
    return {
      name: "",
      price: 0,
      check: false,
    };
  },
};
</script>
 
 <style scoped>
#header {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(55, 0, 100);
}
</style>
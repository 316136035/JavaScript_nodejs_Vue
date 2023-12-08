<template>
  <div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Elder",
  data() {
    return {
      msg: "我是哥哥组件",
      user: { name: "周.....", age: "30" },
    };
  },
  methods:{
    getname(...params){
        console.log(params)
    }

  },

  mounted(){
    //给全局事件总线添加一个方法（方法名，回调参数）
    this.$bus.$on("getYoungername",this.getname)
    
  },
  //销毁前
   beforeDestroy(){
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("getYoungername")
   }

 

};
</script>

<style>
</style>
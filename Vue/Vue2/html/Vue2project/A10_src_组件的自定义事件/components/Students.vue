<template>
  <div class="Students">
    <div>{{ msg }}</div>
     

    <div>{{ user.name }}</div>
    <div>{{ user.address }}</div>
    <button @click="getname">组件自定义绑定事件</button>
    <button @click="untiegetname">解绑组件自定义绑定事件</button>
    <button @click="mydestroy">销毁当前Students组件实例vc</button>
    <div>当前求和{{number}}</div>
     <button @click="mynumber">前求和</button>
    

  </div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      msg: "我是Students组件..",
      user: {
        name: "周先生",
        address: "广东",
      },
      number:"0"
    };
  },
  methods: {
    //组件的绑定事件
    getname() {
      //使用组件的绑定事件“getStudentsnameclick”，（回调参数）
     this.$emit("getStudentsnameclick", this.user.name, this.user.address);
     
    },
    //组件的解绑方法(解绑后的js默认的事件有效 自定义事件不奏效)
    untiegetname() {
      //解绑多=单个自定义绑定事件
      this.$off("getStudentsnameclick");
      //解绑多个自定义绑定事件
      //this.$off(["事件名", "事件名"]);
      //解绑全部自定义绑定事件
      //this.$off()
    },
    mydestroy(){
      //销毁当前Students组件实例vc(销毁后的事件全不奏效)
      this.$destroy()
    },
    mynumber(){
       console.log("mynumber方法调用了....")
      this.number++
    }
  },
};
</script>


<style  scoped>
.Students {
  background-color: aqua;
  padding: auto;
}
</style>
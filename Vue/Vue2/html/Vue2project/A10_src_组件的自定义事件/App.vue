<template>
  <div id="app" class="app">
    <div>{{ msg }}</div>
     <div>{{ params }}</div>
    <!-- 创建组件  自定义绑定事件:Students组件绑定事件@getStudentsname事件名 "getStudentsname"方法名      方法一-->
    <!-- <Students @getStudentsnameclick="getStudentsname"/> -->
    <hr />
    <!-- 把Students组件存放在ref容器中  组件使用原生绑定事件 @click.nativ 绑定了整个div 方法二-->
    <Students ref="students" @click.native="show"/>

    <hr />
  </div>
</template>

<script>
// 引入组件
import Students from "./components/Students.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    Students: Students,
  },
  data() {
    return {
      msg: "我是App组件..",
      params:""
    };
  },
  methods: {
    //回调方法
    getStudentsname( ...params) {
      console.log("我是App组件的getStudentsnam方法", params);
      this.params=params
    },
    show(){
      alert("我是App组件的show()方法")
    }
  },
  mounted() {
    //通过ref容器获取students组件然后绑定事件（事件名，方法名）
    this.$refs.students.$on("getStudentsnameclick", this.getStudentsname); //单击事件
    // this.$refs.students.$oncw("getStudentsnameclick", this.getStudentsname); //单击事件只能执行一次
  },
};
</script>
 

<style>
#app {
  background-color: cadetblue;
}
</style>

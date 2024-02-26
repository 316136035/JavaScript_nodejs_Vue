<!-- 模版 -->
<template>
  <div id="app">
    <!--子组件
     子组件  v-on:getStudentsName_click绑定自定义事件为(父组件函数) ,(getStudentsName_click作用在子组件身上)  
     once代表只能触发一次，简单写法-->
    <Students v-on:getStudentsName_click.once="getStudentsName"></Students>
    <hr />
    <!--子组件 
    把Students组件存放在ref容器中 （复杂写法）
    子组件使用原生绑定事件 @click.nativ 绑定了整个div -->
    <Students ref="stu" ></Students>
  </div>
</template>


<script>
// 引入组件
import Students from "./components/Students.vue";

//暴露主组件的变量和方法 等等  -->
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    Students: Students,
  },
  data() {
    return {
      student: {},
    };
  },
  methods: {
    //父组件函数 （简单写法）
    getStudentsName(student) {
      this.student = student; //把子组件传过来的对象赋值给父组件的student对象
      console.log(JSON.stringify(student));
    },
    show(){
      alert("我是App组件的show()方法")
    }
  },
  //挂载完毕后调用函数（复杂写法）
  mounted() {
    //3秒后再执行函数
    setTimeout(() => {
      this.$refs.stu.$on("getStudentsName_click", this.getStudentsName);//单击事件 (当函数写在组件中时，普通函数this指向的是组件对象，使用的时候注意使用箭头函数)
      // this.$refs.stu.$oncw("getStudentsName_click", this.getStudentsName);//单击事件只能执行一次
    }, 1000);
  },
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>

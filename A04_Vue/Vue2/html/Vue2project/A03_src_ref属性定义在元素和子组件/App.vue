<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 创建模块 定义ref属性 -->
    <SchoolVue ref="schoolVue" />
    <!-- 获取组件实例对象 -->
    <button @click="schoolVue">获取组件实例对象</button>
  </div>
</template>

<script>
// 引入组件
import SchoolVue from "./components/SchoolVue.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    SchoolVue: SchoolVue,
  },
  methods: {
    schoolVue(){
      // 获取组件实例对象
       const element = this.$refs.schoolVue;
      console.log(element)
    }
  },
};
</script>

<style>
/* 样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

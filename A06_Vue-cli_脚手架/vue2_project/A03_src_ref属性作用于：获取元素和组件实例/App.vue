<!-- 模版 -->
<template>
  <div id="app">
    <h1 v-text="msg" ref="h1"></h1>
 
    <button v-on:click="getelement">获取元素</button>

    <School ref="school"></School>
    <button v-on:click="getSchoolComponent">获取school组件</button>

    <School id="school"></School>
    <button v-on:click=" getSchoolelement">获取school组件元素</button>

  </div>
</template>

<script>
// 引入组件
import School from './components/School.vue'
///暴露主组件的变量和方法 等等  -->
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    School: School
  },
  data() {
    return {
      msg: '欢迎来到淘神价'
    }
  },
  // 定义方法
  methods: {
    getelement() {
      console.log(this.$refs.h1);
       
    },
    getSchoolComponent() {
      console.log(this.$refs.school);
    },
    getSchoolelement() {
      console.log(document.getElementById('school'));
    }


  }
  }

</script>

<!-- css样式 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

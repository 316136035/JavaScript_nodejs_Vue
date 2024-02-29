<!-- 模版 -->
<template>
  <div id="app">
 
    <Animation></Animation>
    <hr>
    <Transition></Transition>
    <hr>
    <TransitionList></TransitionList>
    <hr>
    <hr>
    <Three_party_package></Three_party_package>
  </div>
</template>

<script>
// 引入组件
import Animation from './components/Animation.vue'
import Transition from './components/Transition.vue'
import TransitionList from './components/TransitionList.vue'
import Three_party_package from './components/Three_party_package.vue'
// 引入第三方包
import 'animate.css'
//安装包
// 暴露组件
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    Animation:Animation,
    Transition:Transition,
    TransitionList:TransitionList,
    Three_party_package:Three_party_package
    

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

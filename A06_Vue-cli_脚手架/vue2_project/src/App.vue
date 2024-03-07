<!-- 模版 -->
<template>
  <div id="app">
    <!-- <Head></Head> -->
      <Top></Top>
    <Container> </Container>
  </div>
</template>

<script>
// 引入组件
import Container from './components/Container.vue'
import Top from './components/Top.vue'
// 暴露组件
export default {
  name: 'App',//自定义组件名称
  // 注册组件
  components: {
    Top:Top,
    Container: Container
  }
}
</script>

<!-- css样式 -->
<style>
#app {


}
</style>

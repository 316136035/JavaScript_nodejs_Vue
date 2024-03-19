<template>
  <div id="app">
 <!-- 一级路由视图区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
// .导入布局组件
import Index from './views/index.vue'
export default {
  name:"App",
  components: {
    Index: Index

  }


}

</script>

<style>

</style>

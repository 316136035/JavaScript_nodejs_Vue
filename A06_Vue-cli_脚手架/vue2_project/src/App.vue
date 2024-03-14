<!-- 模版 -->
<template>
  <div id="app">
    <!-- 顶部导航 -->
    <Top></Top>
    <!-- 内容区域 -->
    <div class="content_area container">
      <div class="title">
        <!-- router-link路由路径 to="/element" 切换到哪个页面 
           对象写法(路径名) :to="{ path: '/element' }"  
           对象写法(命令模式,路由中要:命名路由):to="{ name: 'Element' }" -->
        <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
        <router-link active-class="active" :to="{ name: 'Element' }"
          >Element网站快速成型工具</router-link
        >
      </div>
    </div>
    <hr />
    <!-- 缓存组件（跳转的时候不销毁组件） :include="[A组件,B组件]" 组件名 -->
    <keep-alive>
      <!-- 组件跳转显示位置 -->
      <router-view class="container"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Top from "./components/Top";
import Bottom from "./components/Bottom";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {
    Top: Top,
    Bottom: Bottom,
  },

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>

</style>

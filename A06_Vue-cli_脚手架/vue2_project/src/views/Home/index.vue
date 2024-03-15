<!-- 模版 -->
<template>
  <el-container>
    <el-aside width="200px">
      <!-- 导航栏 -->
      <LeftNavigationBar></LeftNavigationBar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- 组件显示区 -->
        <router-view>
          组件显示区
        </router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import  LeftNavigationBar from "./Navigation.vue";

// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {
    LeftNavigationBar:LeftNavigationBar
    
  },

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<template>
  <div class="home">
    <h5>布局页</h5>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <NavMenu></NavMenu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>Header</el-header>
        <el-main>
          <!-- 二级路由视图区域 -->
          <router-view></router-view>
        </el-main>
        <!-- 页脚 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
export default {
  components: { NavMenu },
  name: "Home",
  comments: {
    NavMenu: NavMenu,
  },
};
</script>

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
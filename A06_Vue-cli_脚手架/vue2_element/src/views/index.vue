<template>
  <div class="index">
    <h5>布局页</h5>
    <el-container>
      <el-aside width="200px">
        <!-- 左侧导航菜单 -->
        <NavMenuIndex></NavMenuIndex>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部区域 -->
          <TopIndex></TopIndex>
        </el-header>
        <el-main>
          <!-- 二级路由视图区域 主区域 -->
          <router-view></router-view>
        </el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopIndex from "./Top/index.vue";
import NavMenuIndex from "./NavMenu/index.vue";

export default {
  name: "Index",
  components: { TopIndex, NavMenuIndex },
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

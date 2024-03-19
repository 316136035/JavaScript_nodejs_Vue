<template>
  <div class="index">
    <h5>布局页</h5>
    <el-container>
      <el-aside width="200px">
        <!-- 左侧导航菜单 -->
        <NavMenuIndex></NavMenuIndex>
      </el-aside>
      <el-container>
        <el-header style="height: 120px;">
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
// 导入头部组件
import TopIndex from "./Top/index.vue";
// 导入导航栏组件
import NavMenuIndex from "./NavMenu/index.vue";

export default {
  name: "Index",
  // 注册组件
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
  line-height: 16px;
  padding: 0 10px;
  height: calc(100vh - 260px);


}


</style>

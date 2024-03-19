<template>
  <el-container>
    <!-- 上下布局 -->
    <el-header><TopIndex></TopIndex></el-header>
    <el-main>Carousel走马灯</el-main>
    <el-footer>Steps步骤条_Progress进度条</el-footer>
    <!-- 左右布局 -->
    <el-container>
      <el-aside>
        <ContaineIndex></ContaineIndex>
      </el-aside>
      <el-main class="container">
        <!-- 二级路由视图区域 -->
          <router-view></router-view>
      </el-main>
     
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import TopIndex from "./Top/index.vue";
import  ContaineIndex from "./NavMenu/index.vue";
export default {
  components: {
    TopIndex:TopIndex,
    ContaineIndex:ContaineIndex,

  },
};
</script>

<style>
/* 布局头部的顶部 */
.el-header {
  background-color: #b3c0d1;
  padding:0px 0px !important;
}
/* 布局头部的中部 */
.el-main {
  background-color: #b504cc;
}
/* 布局头部的底部 */
.el-footer {
  background: goldenrod;
}
/*下方>右左布局> */
.el-aside {
  background-color: #055bbd;
  max-width: 15%;
}
/*下方>右布局（版心） */
.container {
  max-width: 90%;
}
</style>
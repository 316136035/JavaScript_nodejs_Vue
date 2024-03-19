<template>
  <el-container>
    <!-- 上下布局 -->
    <el-header>
      <TopIndex></TopIndex>
    </el-header>
    <el-main><Carousel></Carousel></el-main>
    <el-footer><StepsProgress></StepsProgress></el-footer>
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
import TopIndex from "./Top/面包屑导航条/index.vue";
import Carousel from "./Top/carousel走马灯/carousel.vue";
import StepsProgress from "./Top/Steps步骤条Progress进度条/index.vue";
import ContaineIndex from "./NavMenu/index.vue";
export default {
  components: {
    TopIndex: TopIndex,
    Carousel: Carousel,
    StepsProgress: StepsProgress,
    ContaineIndex: ContaineIndex,
  },
};
</script>

<style>
/* 布局头部的顶部 */
.el-header {
  background-color: #b3c0d1;
  padding: 0px 0px !important;
}
/* 布局头部的中部 */
.el-main {
  background-color: #b504cc;
  padding: 0px 0px !important;
}
/* 布局头部的底部 */
.el-footer {
  background: goldenrod;
  height: 180px !important;;
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
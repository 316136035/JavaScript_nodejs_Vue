<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px">
      <div></div>
        <div >
          <!-- 使用路由实现当个页面跳转 -->
          <router-link  class="list-group-item"  active-class="active" to="/department">Department</router-link><br />
          <router-link   class="list-group-item "   active-class="active"   to="/personnel">Personnel</router-link> <br />
        </div>
      </el-aside>
      <el-main>
         <!-- 使用路由实现当个页面跳转显示区 -->
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>



<script>
import Header from "./Header.vue";

export default {
  name: "Element",

  // 构件注册组件
  components: {
    // 注册多个组件
    Header: Header,
  },
};
</script>

<style>
.el-header {
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
</style>
<template>
  <el-container>
    <el-header><Header /></el-header>
    <div>
      <button @click="forwardShow">页面向前跳转</button>
      <button @click="backShow">页面向后跳转</button>
    </div>

    <el-container>
      <!-- 使用路由实现当个页面跳转 -->
      <ul class="list-group">
        <li class="list-group-item" active-class="active">
          <!-- 使用路由实现当个页面跳转 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/department"
            >Department</router-link
          ><br />
        </li>
        <li class="list-group-item" active-class="active">
          <!-- 使用路由实现当个页面跳转 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/personnel"
            >Personnel</router-link
          >
          <br />
        </li>
      </ul>

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
  methods: {
    //页面向前跳转
    forwardShow() {
      this.$router.forward();
    },
    // 页面向后跳转
    backShow() {
      this.$router.back();
    },
  },

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
  color: #333;
  text-align: center;
  height: calc(100vh - 100px);
}
</style>
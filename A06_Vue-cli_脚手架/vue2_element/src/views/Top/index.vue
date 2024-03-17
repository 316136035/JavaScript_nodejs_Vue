<template>
  <div>
    <!--响应式布局 -->
    <el-row :gutter="50">
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"
        ><div class="bg-purple-left">
          <!-- 头部左边 -->
          <Left></Left></div
      ></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="bg-purple-right">
          <!-- 头部右边 -->
          <Right></Right></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
// 引入组件
import Left from "./left.vue";
import Right from "./right.vue";
export default {
  // 注册组件
  components: {
    Left:Left,
    Right:Right,
  },
};
</script>

<style>
.el-col {
  border-radius: 4px;
}

.bg-purple-left {
  text-align: left;
  background-color: #d3dce6;
}
</style>
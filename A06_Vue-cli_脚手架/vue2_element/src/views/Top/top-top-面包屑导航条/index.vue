<template>
 
    <el-row :gutter="0">
  <el-col :xs="14" :sm="16" :md="16" :lg="16" :xl="16"><div class="grid-content bg-purple">
    <Left></Left>
  </div></el-col>

  <el-col :xs="10" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light">
    <Right></Right>
  </div></el-col>
</el-row>
 
</template>

<script>
// 引入组件
import Left from "../Top-top/left.vue";
import Right from "../Top-top/right.vue";
export default {
  // 注册组件
  components: {
    Left: Left,
    Right: Right,
  },
};
</script>

<style>


.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #1a4889;
  }
  .bg-purple {
    background: #7ae301;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }


</style>
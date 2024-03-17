<template>
  <div>
    <el-row :gutter="50">
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"
        ><div class="bg-purple-left"><Left></Left></div
      ></el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
        ><div class="bg-purple-right"><Right></Right></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import Left from "./left.vue";
import Right from "./right.vue";
export default {
  components: {
    Left,
    Right,
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
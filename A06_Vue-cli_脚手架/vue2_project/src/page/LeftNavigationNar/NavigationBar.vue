<template>
  <!-- 导航栏 -->
  <!-- default-active="1" 默认选中第一个 -->
  <el-menu default-active="3" router>
    <!-- 无子级选择 -->
    <el-menu-item index="/homepage">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 无子级选择 -->
    <el-menu-item index="datamanagement">
      <i class="el-icon-document"></i>
      <span slot="title">数据管理</span>
    </el-menu-item>
    <!-- 无子级选择 -->
    <el-menu-item index="informationmanagement">
      <i class="el-icon-setting"></i>
      <span slot="title">信息管理</span>
    </el-menu-item>

    <!-- 有子级选择 -->
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航四</span>
      </template>
      <!-- 有分组子级选择 -->
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <!-- 有分组子级选择 -->
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <!-- 无分组子级选择 -->
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-5">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
</style>
<template>
  <!-- 导航栏 -->
  <!-- default-active="1" 默认选中第一个 -->
  <el-menu default-active="3" router>
    <!-- 无子级选择 -->
    <el-menu-item index="index">
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
 <!-- 无分组子级选择 -->
      <el-submenu index="navigation4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-5">选项1</el-menu-item>
      </el-submenu>

         <!-- 有分组子级选择 -->
         <el-menu-item-group title="分组1">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
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
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    router
  >
    <!-- 下面无子菜单 index作用为url路径名 -->
    <el-menu-item index="/index">
      <i class="el-icon-menu" ></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 下面无子菜单 -->
    <el-menu-item   index="/order">
      <i class="el-icon-document"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>

    <!-- 下面有子菜单 -->
    <el-submenu index="3">
      <template slot="title">
        <!-- 图标 -->
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <!-- 菜单组 -->
      <el-menu-item-group>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "LeftNavigationBar",
};
</script>

<style>
</style>
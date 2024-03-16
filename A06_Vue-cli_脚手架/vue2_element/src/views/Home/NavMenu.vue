<template>
  <div class="nav-menu">
     <!--  default-active="/index"  默认激活的菜单项  router必须添加不然无法切换url-->
    <el-menu default-active="/index" class="el-menu-vertical-demo" router>
      <!-- 导航菜单 无子项 -->
      <el-menu-item index="/index">
        <i class="el-icon-setting"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <!-- 导航菜单 无子项 -->
      <el-menu-item index="/stats">
        <i class="el-icon-setting"></i>
        <span slot="title">信息管理</span>
      </el-menu-item>
      <!-- 导航菜单 有子项 -->
      <el-submenu index="/invoiceManage">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>发票管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/invoiceManage/issue">发票开具</el-menu-item>
          <el-menu-item index="/invoiceManage/inquiry">发票查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      NavMenuLists: [
        { index: "/index", title: "主页" },
        { index: "/stats", title: "信息管理" },
        { index: "/invoiceManage", title: "发票管理" },
      ],
    };
  },
};
</script>

<style>
</style>
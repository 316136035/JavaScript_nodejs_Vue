<template>
 
    <!--  default-active="/index"  默认激活的菜单项  router必须添加不然无法切换url-->
    <el-menu
      default-active="home"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- 导航菜单 无子项 
        :index="item.index"    设置路由地址
        v-if="!item.children" 判断是否有子项 -->
      <el-menu-item :index="item.index" v-if="!item.children">
        <!-- 设置图标 -->
        <i :class="item.iconUrl"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>

    
         <!-- 导航菜单 有子项
        :index="item.index"    设置路由地址
        v-if="!item.children" 判断是否有子项 -->
      <el-submenu :index="item.index" v-if="item.children">
        <template slot="title">
            <!-- 设置图标 -->
          <i :class="item.iconUrl"></i>
          <!-- 设置主标题 -->
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(childrenitem, i) in item.children"
          :key="`${childrenitem.iconUrl}-${i}`"
        >
          <NavMenuItem :item="childrenitem"></NavMenuItem>
        </el-menu-item-group>
      </el-submenu>
 
    </el-menu>
 
</template>

<script>
export default {
  name: "NavMenuItem",
  //声明接受组件的属性
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>
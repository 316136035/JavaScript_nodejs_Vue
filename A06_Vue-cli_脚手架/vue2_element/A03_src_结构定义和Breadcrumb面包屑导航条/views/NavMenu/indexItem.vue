<template>
  <div class="nav-menu">
    <!--  default-active="/index"  默认激活的菜单项  router必须添加不然无法切换url-->
    <el-menu default-active="" class="el-menu-vertical-demo" router>
      <!-- 导航菜单 无子项 -->
      <!--  :index="item.index" 获取父级item对象的路径
            :key="item.iconUrl" 获取父级item对象的图标地址 
            v-if="!item.children" 判读对象是否拥有子项 -->
      <el-menu-item
        :index="item.index"
        :key="item.iconUrl"
        v-if="!item.children"
      >
        <!-- 获取父级item对象的图标地址 -->
        <i :class="item.iconUrl"></i>
        <!--获取父级item对象的title  -->
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>

      <!-- 导航菜单 有子项 -->
      <!-- :index="item.index" 获取父级item的路径    v-else 判断是否拥有子项  -->
      <el-submenu :index="item.iconUrl" v-else>
        <template slot="title">
          <!-- 获取父级item对象的图标地址 -->
          <i class="el-icon-location"></i>
          <!--获取父级item对象的title  -->
          <span>{{ item.title }}</span>
        </template>
        <!-- 递归调用子组件  -->
        <IndexItem
          v-for="item in item['children']"
          :key="item.index"
          :item="item"
        ></IndexItem>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "IndexItem",
  props: { item: { type: Object } }, //接受父组件传值
  data() {
    return {};
  },
};
</script>

<style>
</style>
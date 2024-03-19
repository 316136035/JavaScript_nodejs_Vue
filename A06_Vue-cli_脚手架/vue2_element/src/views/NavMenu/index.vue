<template>
  <div class="nav-menu">
    <!-- App.vue 或者你用来展示导航菜单的组件 -->
    <template>
      <div id="app">
        <!-- 导航菜单 组件 
     v-for="(item) in NavMenuLists" :key="`${item.iconUrl}-${item.title}`"   遍历数组
       :item="item" 把每一次遍历的item对象传给NavMenuItem组件 -->
        <NavMenuItem
          v-for="item in NavMenuLists"
          :key="`${item.iconUrl}-${item.title}`"
          :item="item"
        ></NavMenuItem>
      </div>
    </template>
  </div>
</template>



<script>
import NavMenuItem from "./NavMenuItem.vue";
export default {
  name: "Index",
  components: {
    NavMenuItem,
  },
  data() {
    return {
      // 导航菜单数据
      NavMenuLists: [
      {
          index: "/home",
          title: "首页",
          iconUrl: "el-icon-s-home",
        },
        {
          index: "/Breadcrumb",
          title: "面包屑导航条",
          iconUrl: "el-icon-s-home",
        },
        {
          index: "/Carousel",
          title: "Carousel走马灯",
          iconUrl: "el-icon-tableware",
        },
        {
          index: "/StepsProgress",
          title: "Steps步骤条_Progress进度条",
          iconUrl: "el-icon-user",
        },
        {
          index: "/Table表单",
          title: "Table表单",
          iconUrl: "el-icon-tickets",
          children: [
          {
              index: "/Table/ordinaryTable",
              title: "普通表格",
              iconUrl: "el-icon-tickets",
            },
            {
              index: "/Table/add_delete_modify_Table",
              title: "添加修改删除表格",
              iconUrl: "el-icon-tickets",
            },
           
          ],
        },
        {
          index: "/Cascader",
          title: "级联选择器（地址选择）",
          iconUrl: "el-icon-s-home",
        },
      ],
    };
  },
};
</script>

<style>
</style>
<template>
   <div class="nav-menu">
    
    <!-- App.vue 或者你用来展示导航菜单的组件 -->
  <template>
  <div id="app">
    <!-- 导航菜单 组件 
      v-for="(item) in NavMenuLists" :key="`${item.iconUrl}-${item.title}`"   遍历数组
        :item="item" 把每一次遍历的item对象传给NavMenuItem组件 -->
    <NavMenuItem
      v-for="(item) in NavMenuLists"
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
        { index: "/home", title: "主页", iconUrl: "el-icon-s-home" },
        { index: "/stats", title: "信息管理", iconUrl: "el-icon-tableware" },
        {
          index: "/user",
          title: "用户管理",
          iconUrl: "el-icon-user",
          children: [
            { index: "/user/role", title: "用户角色", iconUrl: "el-icon-user" },
            {index: "/user/statistics",title: "用户统计",iconUrl: "el-icon-user",
            },
          ],
        },
        {
          index: "/invoiceManage",
          title: "发票管理",
          iconUrl: "el-icon-tickets",
          children: [
            { index: "/invoiceManage/issue", title: "发票开具", iconUrl: "el-icon-tickets" },
            {index: "/invoiceManage/inquiry",title: "发票查询",iconUrl: "el-icon-tickets",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>